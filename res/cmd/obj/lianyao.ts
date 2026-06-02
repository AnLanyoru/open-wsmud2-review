// ============================================================
// 炼药命令 (lianyao)
// 位置: world/cmd/obj/lianyao.js
// 作用: 在炼药房中使用已研制的丹方快捷炼制丹药
// 流程:
//   1. 点击动作栏"炼药" → 横排品质按钮: [炼制一级丹药] [炼制二级丹药] ...
//   2. 点击品质按钮 → 纵向丹方按钮（含所需材料 + 库存判定）
//   3. 点击丹方按钮 → 自动消耗材料 → 产出丹药
// 命令格式:
//   lianyao              — 显示品质选择按钮
//   lianyao <品质>        — 显示该品质的已研制丹方（如 lianyao 绿色 / lianyao 1）
//   lianyao <丹方ID>     — 直接炼制指定丹方（如 lianyao 1）
//   lianyao <名称> <品质> — 按名称品质炼制（如 lianyao 大还丹 绿色）
// 依赖: WORLD.LIANYAO_RECIPES, WORLD.LIANYAO_BYID, WORLD.LIANYAO_FIND, WORLD.LIANYAO_HERB_MAP
// ============================================================

this.inherits(COMMAND);
this.command = "lianyao";
this.regex = /^(\S+)?(?:\s(\S+))?$/;

// 品质定义
var QUALITIES = ["绿色", "蓝色", "黄色", "紫色", "橙色"];
var QUALITY_GRADE = { "绿色": 1, "蓝色": 2, "黄色": 3, "紫色": 4, "橙色": 5 };
var GRADE_NAMES = { 1: "一级", 2: "二级", 3: "三级", 4: "四级", 5: "五级" };

// ---- 命令入口 ----
this.enter = function (me, arg1, arg2) {
    // 必须在炼药房中
    if (!me.environment || !me.environment.can_lianyao) {
        return me.notify("这里不是炼药房，你要找个有炼药炉的地方炼药。");
    }

    // 必须学会炼药术
    var ly_lv = me.query_skill("lianyao", 0);
    if (!ly_lv) {
        return me.notify("你还不会炼药术，先去找平一指学习吧。");
    }

    // 获取已研制的丹方（存储在玩家 temp 数据中）
    var known = me.query_temp("lianyao/known");
    if (!known || Object.keys(known).length === 0) {
        return me.notify("你还没有研制过任何丹方。先使用研制丹药解锁配方吧。");
    }

    // 无参数 → 显示品质选择按钮（横排）
    if (!arg1) {
        return show_quality_buttons(me, known);
    }

    // 品质参数（如 lianyao 绿色）→ 显示该品质的丹方列表
    var grade = QUALITY_GRADE[arg1];
    if (grade && !arg2) {
        return show_recipes_by_quality(me, known, arg1);
    }

    // 查找具体丹方
    var recipe = null;
    if (!isNaN(arg1)) {
        recipe = WORLD.LIANYAO_BYID(parseInt(arg1));
    } else if (arg2) {
        recipe = WORLD.LIANYAO_FIND(arg1, arg2);
    } else {
        // 只给名称不给品质 → 从高到低查找
        for (var q = QUALITIES.length - 1; q >= 0; q--) {
            var r = WORLD.LIANYAO_FIND(arg1, QUALITIES[q]);
            if (r) { recipe = r; break; }
        }
    }

    if (!recipe) return me.notify("没有找到这个丹方。");

    if (!known[recipe.id]) {
        return me.notify("你还没有研制【" + recipe.quality + recipe.name + "】，先用研制丹药解锁它。");
    }

    // 执行炼制
    do_lianyao(me, recipe, ly_lv);
};

// ============================================================
// 显示品质选择按钮（横排 send_commands）
// 格式: [炼制一级丹药] [炼制二级丹药] [炼制三级丹药] ...
// 只显示有已研制丹方的品质
// ============================================================
function show_quality_buttons(me, known) {
    // 统计每个品质的已解锁总数
    var counts = {};
    for (var id in known) {
        var r = WORLD.LIANYAO_BYID(parseInt(id));
        if (r) counts[r.quality] = (counts[r.quality] || 0) + 1;
    }

    var args = [];
    for (var q = 0; q < QUALITIES.length; q++) {
        var quality = QUALITIES[q];
        if (counts[quality]) {
            args.push("lianyao " + quality);                 // 点击后的命令
            args.push("炼制" + GRADE_NAMES[q + 1] + "丹药"); // 按钮文字
        }
    }

    if (!args.length) {
        return me.notify("你还没有研制过任何丹方。");
    }

    // send_commands 在信息栏生成可点击按钮（横排）
    me.send_commands.apply(me, args);
}

// ============================================================
// 按品质列出已研制丹方（纵向 send_commands）
// 每个丹方显示: 名称 + 所需材料×数量 + [材料不足/可炼制X颗]
// 点击丹方按钮直接炼制
// ============================================================
function show_recipes_by_quality(me, known, quality) {
    // 收集该品质所有已研制的丹方
    var collections = [];
    for (var id in known) {
        var r = WORLD.LIANYAO_BYID(parseInt(id));
        if (r && r.quality === quality) {
            collections.push(r);
        }
    }

    if (!collections.length) {
        return me.notify("【" + quality + "】品质还没有已研制的丹方。");
    }

    // 按ID排序
    collections.sort(function (a, b) { return a.id - b.id; });

    // 构建每个丹方的按钮
    var args = [];
    for (var i = 0; i < collections.length; i++) {
        var r = collections[i];

        // 汇总材料需求（合并同名材料）
        var matCount = {};
        for (var j = 0; j < r.ingredients.length; j++) {
            var p = r.ingredients[j];
            if (!p) continue;
            matCount[p] = (matCount[p] || 0) + 1;
        }

        // 生成材料文字 + 计算最多可炼制数量
        var matParts = [];
        var maxCraft = -1; // 最大可炼制数，取各材料的(拥有/需求)最小值
        for (var p in matCount) {
            // 统计背包中该材料的数量
            var own = 0;
            me.each_item(function (item) {
                if (item.path === p) own += item.count || 1;
            });
            matParts.push(getIngDisplayName(p) + "×" + matCount[p]);
            var canMake = Math.floor(own / matCount[p]);
            if (maxCraft === -1 || canMake < maxCraft) maxCraft = canMake;
        }

        if (maxCraft === -1) maxCraft = 0;

        // 按钮文字
        var btnName = r.name + " 需要材料：" + matParts.join(" ");
        if (maxCraft <= 0) {
            btnName += " 【材料不足】";
        } else {
            btnName += " 【可炼制" + maxCraft + "颗】";
        }

        args.push("lianyao " + r.id);
        args.push(btnName);
    }

    // send_commands 在信息栏生成纵向排列的按钮
    me.send_commands.apply(me, args);
}

// ============================================================
// 执行炼药：消耗材料 → 获得丹药 → 获得技能经验
// 按配方炼制必定成功（不会失败）
// ============================================================
function do_lianyao(me, recipe, ly_lv) {
    // 等级检查（理论上研制时已过滤，这里作为双保险）
    if (ly_lv < recipe.grade * 500) {
        return me.notify("你的炼药术等级不足" + (recipe.grade * 500) + "级，无法炼制" + recipe.quality + "品质的丹药。");
    }

    // 汇总所需材料
    var needed = countIngredients(recipe.ingredients);

    // 验证材料是否充足
    var missing = [];
    for (var ing in needed) {
        var found = 0;
        me.each_item(function (item) {
            if (item.path === ing) found += item.count || 1;
        });
        if (found < needed[ing]) {
            missing.push(getIngDisplayName(ing) + "缺" + (needed[ing] - found) + "个");
        }
    }

    if (missing.length) {
        return me.notify("材料不足：" + missing.join("，"));
    }

    // 依次消耗每种材料
    for (var ing in needed) {
        var remaining = needed[ing];
        for (var j = me.items.length - 1; j >= 0; j--) {
            var item = me.items[j];
            if (item && item.path === ing) {
                if (item.combined) {
                    // 可堆叠物品
                    if (item.count <= remaining) {
                        remaining -= item.count;
                        me.remove_item(item);
                    } else {
                        item.count -= remaining;
                        remaining = 0;
                        me.items_changed(item, 0);
                    }
                } else {
                    me.remove_item(item);
                    remaining--;
                }
                if (remaining <= 0) break;
            }
        }
    }

    // 炼药术获得经验
    var skill_exp = recipe.grade * 50 + me.random(20);
    SKILL.get("lianyao").add_exp(me, skill_exp);

    // 创建丹药（必定成功）
    var pill = OBJ.CREATE("drug/dan#" + recipe.id);
    if (pill) {
        me.add_obj(pill);
        me.notify("<hic>炼制成功！</hic>你获得了一颗<hiy>" + recipe.quality + recipe.name + "</hiy>。");
        me.send_room("<mag>$N小心翼翼地打开炼药炉，一股药香弥漫开来。</mag>");
    } else {
        me.notify("丹药生成出错，请联系管理员。");
    }
}

// 统计材料数组中各材料的数量
function countIngredients(ingredients) {
    var result = {};
    for (var i = 0; i < ingredients.length; i++) {
        var p = ingredients[i];
        if (!p) continue;
        result[p] = (result[p] || 0) + 1;
    }
    return result;
}

// 从物品路径反查中文名
function getIngDisplayName(path) {
    var map = WORLD.LIANYAO_HERB_MAP;
    for (var name in map) {
        if (map[name] === path) return name;
    }
    return path;
}
