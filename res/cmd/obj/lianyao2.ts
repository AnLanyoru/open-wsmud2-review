// ============================================================
// 研制丹药命令 (lianyao2)
// 位置: world/cmd/obj/lianyao2.js
// 作用: 在炼药房中通过逐轮投入材料来研制丹药，玩家不可手动停止
//       每轮自动检查当前序列是否匹配某配方的前缀 / 完全匹配
//       完全匹配 + 炼药术够 → 解锁丹方 + 获得一颗丹药
// 命令格式:
//   lianyao2                  — 显示品质选择按钮
//   lianyao2 <品质>            — 选定品质，显示 [添加药材] [添加药引] 按钮
//   lianyao2 herb             — 列出该品质配方需要的所有药材（仅背包中有的）
//   lianyao2 fish             — 列出该品质配方需要的所有药引（仅背包中有的）
//   lianyao2 add <材料名>     — 投入材料
// ============================================================

this.inherits(COMMAND);
this.command = "lianyao2";
this.allow_busy = true;
this.allow_faint = true;
this.regex = /^(\S+)?(?:\s(.+))?$/;

var QUALITIES = ["绿色", "蓝色", "黄色", "紫色", "橙色"];
var QUALITY_GRADE = { "绿色": 1, "蓝色": 2, "黄色": 3, "紫色": 4, "橙色": 5, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 };
var GRADE_NAMES = { 1: "一级", 2: "二级", 3: "三级", 4: "四级", 5: "五级" };

var TIPS = [
    "控制着火候", "丹炉里火力渐盛", "一股药香从炉中飘出",
    "丹炉微微震动", "炉中药液渐渐浓缩", "看上去快要成型了",
    "材料在炉中慢慢融化", "药力正在融合", "丹炉中传来轻微的响声"
];

// ---- 命令入口 ----
this.enter = function (me, cmd, arg) {
    if (!me.environment || !me.environment.can_lianyao) {
        return me.notify("这里不是炼药房，你要找个有炼药炉的地方。");
    }

    var ly_lv = me.query_skill("lianyao", 0);
    if (!ly_lv) return me.notify("你还不会炼药术，先去找平一指学习吧。");

    // 无参数 → 显示品质选择按钮（和炼药一样的横排按钮）
    if (!cmd) {
        return show_quality_buttons(me);
    }

    // 品质参数（如 lianyao2 绿色）→ 进入该品质研制
    var qualityGrade = QUALITY_GRADE[cmd];
    if (qualityGrade) {
        return start_research(me, qualityName(cmd), ly_lv);
    }

    // herb / fish → 列出该品质配方所需的该类材料按钮
    if (cmd === "herb") return show_materials(me, "cao");
    if (cmd === "fish") return show_materials(me, "yu");
    if (cmd === "back") return show_type_buttons(me);

    // add → 投入材料
    if (cmd === "add") return do_add(me, arg, ly_lv);

    return me.notify("用法：<wht>lianyao2</wht> 选品质，然后按提示投入材料。");
};

// ============================================================
// 显示品质选择按钮（横排）— 只显示有未研制丹方的品质
// ============================================================
function show_quality_buttons(me) {
    var known = knownRecipes(me);
    var all = WORLD.LIANYAO_RECIPES;

    // 统计各品质未研制的丹方数
    var counts = {};
    for (var i = 0; i < all.length; i++) {
        var r = all[i];
        if (!known[r.id]) {
            counts[r.quality] = (counts[r.quality] || 0) + 1;
        }
    }

    var args = [];
    for (var q = 0; q < QUALITIES.length; q++) {
        var quality = QUALITIES[q];
        if (counts[quality]) {
            args.push("lianyao2 " + quality);
            args.push("研制" + GRADE_NAMES[q + 1] + "丹药");
        }
    }

    if (!args.length) {
        return me.notify("你已经研制了所有丹方！");
    }

    me.send_commands.apply(me, args);
}

function qualityName(value) {
    if (QUALITY_GRADE[value] && QUALITIES[QUALITY_GRADE[value] - 1]) {
        return QUALITIES[QUALITY_GRADE[value] - 1];
    }
    return value;
}

// ============================================================
// 开始研制指定品质 — 显示 [添加药材] [添加药引] 按钮
// ============================================================
function start_research(me, quality, ly_lv) {
    if (me.state) return me.notify("你正在" + me.state.title + "，先停下来再研制丹药。");
    var grade = QUALITY_GRADE[quality];
    if (ly_lv < grade * 500) {
        return me.notify("你的炼药术等级不足" + (grade * 500) + "级，无法研制" + quality + "品质的丹药。");
    }

    // 获取该品质所有未研制配方，计算最长材料数
    var all = WORLD.LIANYAO_RECIPES;
    var known = knownRecipes(me);
    var maxRounds = 0;
    var hasUnlocked = false;
    for (var i = 0; i < all.length; i++) {
        if (all[i].quality === quality && !known[all[i].id]) {
            hasUnlocked = true;
            var ingCount = 0;
            for (var j = 0; j < all[i].ingredients.length; j++) {
                if (all[i].ingredients[j]) ingCount++;
            }
            if (ingCount > maxRounds) maxRounds = ingCount;
        }
    }

    if (!hasUnlocked) {
        return me.notify("【" + quality + "】品质已经没有未研制的丹方了。");
    }

    // 初始化研制状态
    me.set_temp("lianyao2/research", {
        quality: quality,
        grade: grade,
        ingredients: [],     // 玩家已投放的材料路径序列
        round: 1,            // 当前轮次
        maxRounds: maxRounds // 该品质配方最大材料数
    });

    me.set_state({
        id: "lianyao2",
        title: "研制丹药",
        rate: 1,
        desc: "正在研制" + quality + "品质丹药，最多" + maxRounds + "轮...",
        allow_fight: false
    });

    me.notify("<hic>你打开丹炉，开始研制" + quality + "品质丹药。</hic>");
    me.notify("<wht>最多可投入 " + maxRounds + " 轮材料，请选择要添加的类别：</wht>");

    // 显示类别选择按钮
    show_type_buttons(me);
}

// 显示 [添加药材] [添加药引] 横排按钮
function show_type_buttons(me) {
    var args = [];
    // 检查是否有可用的药材
    if (hasAvailableHerb(me)) {
        args.push("lianyao2 herb");
        args.push("添加药材");
    }
    // 检查是否有可用的药引
    if (hasAvailableFish(me)) {
        args.push("lianyao2 fish");
        args.push("添加药引");
    }

    if (!args.length) {
        // 没有可用材料了，强制失败
        me.remove_temp("lianyao2/research");
        me.set_state(null);
        me.notify("<red>你的背包中没有可用的材料了，研制失败。</red>");
        me.send_room("<red>$N的丹炉中冒出一股黑烟，研制失败了。</red>");
        return;
    }

    me.notify(TIPS.random());
    me.send_commands.apply(me, args);
}

// 检查背包中是否有该品质配方用到的草药
function hasAvailableHerb(me) {
    var rs = me.query_temp("lianyao2/research");
    if (!rs) return false;
    return getAvailableMaterials(me, rs).herbs.length > 0;
}

// 检查背包中是否有该品质配方用到的鱼类
function hasAvailableFish(me) {
    var rs = me.query_temp("lianyao2/research");
    if (!rs) return false;
    return getAvailableMaterials(me, rs).fishes.length > 0;
}

// ============================================================
// 获取该品质当前可用的材料列表（去重，只列背包中有的）
// 返回 { herbs: [{name, path}], fishes: [{name, path}] }
// ============================================================
function getAvailableMaterials(me, rs) {
    var all = WORLD.LIANYAO_RECIPES;
    var known = knownRecipes(me);
    var herbSet = {};
    var fishSet = {};

    for (var i = 0; i < all.length; i++) {
        var r = all[i];
        // 只考虑同品质、未解锁的配方
        if (r.quality !== rs.quality || known[r.id]) continue;

        // 收集所有材料（草药和鱼类分开）
        for (var j = 0; j < r.ingredients.length; j++) {
            var p = r.ingredients[j];
            if (!p) continue;
            var name = getIngDisplayName(p);
            if (!name) continue;
            if (p.indexOf("cao") !== -1) {
                herbSet[name] = p;
            } else if (p.indexOf("yu") !== -1) {
                fishSet[name] = p;
            }
        }
    }

    // 过滤背包中有的
    var herbs = [];
    var fishes = [];
    for (var name in herbSet) {
        if (playerHas(me, herbSet[name])) {
            herbs.push({ name: name, path: herbSet[name] });
        }
    }
    for (var name in fishSet) {
        if (playerHas(me, fishSet[name])) {
            fishes.push({ name: name, path: fishSet[name] });
        }
    }

    return { herbs: herbs, fishes: fishes };
}

// 检查背包中是否有某材料
function playerHas(me, path) {
    var found = false;
    me.each_item(function (item) {
        if (item.path === path && (item.count || 1) > 0) {
            found = true;
            return false;
        }
    });
    return found;
}

// ============================================================
// 显示材料选择按钮（草药或鱼类，纵向排列）
// cmd: "herb" 或 "fish"
// ============================================================
function show_materials(me, type) {
    var rs = me.query_temp("lianyao2/research");
    if (!rs) return me.notify("你还没有开始研制丹药。");

    var materials = getAvailableMaterials(me, rs);
    var list = type === "cao" ? materials.herbs : materials.fishes;

    if (!list.length) {
        me.notify("你的背包中没有可用的" + (type === "cao" ? "药材" : "药引") + "。");
        return show_type_buttons(me);
    }

    var typeName = type === "cao" ? "药材" : "药引";
    me.notify("<wht>请选择要投入的" + typeName + "（第 " + rs.round + "/" + rs.maxRounds + " 轮）：</wht>");

    var args = [];
    for (var i = 0; i < list.length; i++) {
        args.push("lianyao2 add " + list[i].name);
        args.push(list[i].name);
    }

    // "返回"按钮
    args.push("lianyao2 back");
    args.push("返回");

    me.send_commands.apply(me, args);
}

// ============================================================
// 投入材料 → 消耗 → 追加序列 → 自动检查前缀匹配
// ============================================================
function do_add(me, arg, ly_lv) {
    var rs = me.query_temp("lianyao2/research");
    if (!rs) return me.notify("你还没有开始研制丹药。输入 lianyao2 <品质> 开始。");

    if (!arg) return me.notify("你要放入什么材料？");

    // 校验材料名
    var inputPath = WORLD.LIANYAO_HERB_MAP[arg];
    if (!inputPath) return me.notify("没有【" + arg + "】这种材料。");

    // 检查背包
    if (!playerHas(me, inputPath)) {
        me.notify("你的背包中没有【" + arg + "】。");
        return show_type_buttons(me);
    }

    // 消耗材料
    var consumed = false;
    for (var j = me.items.length - 1; j >= 0; j--) {
        var item = me.items[j];
        if (item && item.path === inputPath) {
            if (item.combined && item.count > 1) {
                item.count--;
                me.items_changed(item, 0);
            } else {
                me.remove_item(item);
            }
            consumed = true;
            break;
        }
    }
    if (!consumed) return me.notify("消耗材料失败。");

    // 记录投放
    rs.ingredients.push(inputPath);
    me.set_temp("lianyao2/research", rs);

    me.notify("<wht>第 " + rs.round + " 轮：</wht>你将<hiy>" + arg + "</hiy>放入丹炉。");
    me.send_room("<mag>$N小心地将" + arg + "放入丹炉中。</mag>");

    // 自动检查匹配状态
    var result = check_match(me, rs);
    if (result === "complete") {
        // 完全匹配 → 检查等级 → 解锁 + 奖励
        complete_research(me, rs, ly_lv);
        return;
    } else if (result === "prefix") {
        // 有效前缀 → 下一轮
        rs.round++;
        // 超过最大轮数 → 强制结束
        if (rs.round > rs.maxRounds) {
            me.remove_temp("lianyao2/research");
            me.set_state(null);
            me.notify("<red>已投入 " + rs.maxRounds + " 轮材料，但仍未匹配到任何丹方，研制失败。</red>");
            me.send_room("<red>$N的丹炉中冒出一股黑烟，研制失败了。</red>");
            return;
        }
        me.set_temp("lianyao2/research", rs);
        return show_type_buttons(me);
    } else {
        // 无匹配前缀 → 失败
        me.remove_temp("lianyao2/research");
        me.set_state(null);
        me.notify("<red>材料的搭配似乎不对！丹炉中冒出一股黑烟，研制失败了。</red>");
        me.send_room("<red>$N的丹炉中冒出一股黑烟，看来研制丹药失败了。</red>");
        return;
    }
}

// ============================================================
// 检查当前序列是否匹配某配方
// 返回: "complete" 完全匹配 | "prefix" 有效前缀 | "none" 无匹配
// ============================================================
function check_match(me, rs) {
    var all = WORLD.LIANYAO_RECIPES;
    var known = knownRecipes(me);
    var seq = rs.ingredients;
    var hasPrefix = false;

    for (var i = 0; i < all.length; i++) {
        var r = all[i];
        // 只检查同品质、未解锁的配方
        if (r.quality !== rs.quality || known[r.id]) continue;

        // 过滤配方中的空材料项
        var recipeIngs = [];
        for (var j = 0; j < r.ingredients.length; j++) {
            if (r.ingredients[j]) recipeIngs.push(r.ingredients[j]);
        }

        // 玩家序列比配方长 → 不可能匹配
        if (seq.length > recipeIngs.length) continue;

        // 检查是否前缀匹配
        var isPrefix = true;
        for (var k = 0; k < seq.length; k++) {
            if (seq[k] !== recipeIngs[k]) {
                isPrefix = false;
                break;
            }
        }

        if (isPrefix) {
            if (seq.length === recipeIngs.length) {
                // 完全匹配！
                rs.matchedRecipe = r;
                return "complete";
            }
            hasPrefix = true;
        }
    }

    return hasPrefix ? "prefix" : "none";
}

// ============================================================
// 研制完成 → 检查等级 → 解锁丹方 + 奖励丹药
// ============================================================
function complete_research(me, rs, ly_lv) {
    var recipe = rs.matchedRecipe;

    // 清理研制状态
    me.remove_temp("lianyao2/research");
    me.set_state(null);

    // 检查炼药术等级（品质 × 500）
    if (ly_lv < recipe.grade * 500) {
        me.notify("<red>研制失败！</red>你的炼药能力不足，无法完成" +
            recipe.quality + "品质丹药的炼制（需要炼药术" + (recipe.grade * 500) + "级）。");
        me.send_room("<red>$N的丹炉中冒出一股黑烟，看来是炼药能力不足。</red>");
        return;
    }

    // 解锁丹方
    var known = knownRecipes(me);
    known[recipe.id] = true;
    me.set_temp("lianyao/known", known);

    // 奖励一颗丹药
    var pill = OBJ.CREATE("drug/dan#" + recipe.id);
    if (pill) {
        me.add_obj(pill);
    }

    // 炼药术经验
    var skill_exp = recipe.grade * 100 + me.random(50);
    SKILL.get("lianyao").add_exp(me, skill_exp);

    me.notify("<hic>恭喜！</hic>你成功研制了 <hiy>" + recipe.quality + recipe.name +
        "</hiy> 的丹方！现在可以用 <wht>lianyao</wht> 快捷炼制了。");
    me.send_room("<mag>$N成功研制出了一种新的丹药配方！</mag>");
}

// ============================================================
// 工具函数
// ============================================================

function knownRecipes(me) {
    var v = me.query_temp("lianyao/known");
    if (!v) {
        v = {};
        me.set_temp("lianyao/known", v);
    }
    return v;
}

function getIngDisplayName(path) {
    if (!path) return "";
    var map = WORLD.LIANYAO_HERB_MAP;
    for (var name in map) {
        if (map[name] === path) return name;
    }
    return "";
}
