// ============================================================
// 丹药物品定义
// 位置: world/obj/drug/dan.js
// 作用: 定义炼药产出的丹药物品，通过 OBJ.CREATE("drug/dan#配方ID") 创建
//       服用后根据丹方效果附加 buff 或执行特殊逻辑（突破丹/恢复丹）
// 依赖: WORLD.LIANYAO_BYID（extends/obj/lianyao_recipes.js）
// ============================================================

this.inherits(OBJ);
this.set({
    unit: "颗",
    name: "丹药",
    desc: "一颗丹药",
    grade: 1,
    value: 1000,
});
this.combined = true;    // 可堆叠
this.transable = true;   // 可交易
this.action_msg = "吃";  // 使用按钮文字
this.allow_fight = true; // 战斗中可用

// 丹药 buff 持续时间（毫秒），索引=品质等级
// 绿色10分 蓝色15分 黄色20分 紫色30分 橙色60分
var DURATIONS = [0, 600000, 900000, 1200000, 1800000, 3600000];

// ---- 服用丹药 ----
this.on_use = function (me) {
    if (!this.recipe) return me.notify_fail("这颗丹药好像有问题。");

    // 突破丹：消耗潜能，随机提升非知识类技能 1-5 级
    if (this.recipe.name === "突破丹" || this.recipe.name === "突破") {
        return use_breakthrough(this, me);
    }

    // 恢复内力类（橙色"无常"）：直接回复百分比内力
    if (this.recipe.isRecover) {
        var recover = parseInt(me.max_mp * this.recipe.effectVal / 100);
        me.add_mp(recover);
        me.send_room("<mag>$N吞下一颗" + this.color_name + "，内力恢复了不少。</mag>");
        return;
    }

    // 普通 buff 丹药：附加临时属性
    if (!this.recipe.effectProp) return me.notify_fail("这颗丹药的药性还不稳定，暂时不能服用。");

    var prop = {};
    var val = this.recipe.effectVal;
    var status = {
        id: "dan/" + this.recipe.effectProp, // 同类效果互相刷新，不同效果可以同时存在
        name: this.recipe.name,
        desc: this.recipe.effectDesc,
        duration: this.duration || 1200000,
        override: 2
    };

    if (this.recipe.effectProp === "mp_per") {
        var addMp = parseInt(me.max_mp * val / 100);
        status.on_attach = function (user) {
            user.max_mp += addMp;
            user.mp += addMp;
            user.recount();
        };
        status.on_expire = function (user) {
            user.max_mp -= addMp;
            if (user.mp > user.max_mp) user.mp = user.max_mp;
            user.recount();
        };
    } else {
        prop[this.recipe.effectProp] = val;
        status.prop = prop;
    }

    me.add_status(status);

    me.send_room("<mag>$N吞下一颗" + this.color_name + "，感觉" + this.recipe.effectDesc + "的效果在身上流转。</mag>");
};

// 突破丹逻辑：消耗潜能，随机选中一项非知识技能提升 1-5 级
function use_breakthrough(drug, me) {
    if (!(me.pot > 0)) return me.notify("你的潜能不够，好像没什么效果。");

    // 收集所有可用技能（非知识类且品质不高于丹药品级）
    var list = [];
    for (var sk in me.skills) {
        var base_skill = SKILL.get(sk);
        if (base_skill && base_skill.type !== SKILL_TYPES.KNOWLEDGE && base_skill.grade <= drug.recipe.grade) {
            list.push(base_skill);
        }
    }
    var skillbase = list.random();
    if (!skillbase) return me.notify("你还没有学会可以突破的技能。");

    // 随机 1-5 级，高概率出低级
    var level = me.random(15);
    if (level > 13) level = 5;
    else if (level > 11) level = 4;
    else if (level > 8) level = 3;
    else if (level > 4) level = 2;
    else level = 1;

    // 计算需要消耗的潜能
    var now_lv = me.skills[skillbase.id].level;
    var needexp = 0;
    var loops = level;
    while (loops) {
        needexp += skillbase.level_exp(now_lv + loops, me);
        loops--;
    }
    if (needexp > me.pot) return me.notify("你的潜能不够，好像没什么效果。");

    skillbase.add_exp(me, needexp);
    me.pot -= needexp;
    me.send_room("<hiy>$N吞下一颗" + drug.color_name + "，" + skillbase.name + "突破了" + level + "级！</hiy>");
}

// ---- 物品创建回调（OBJ.CREATE 时触发） ----
this.on_create = function (path, par) {
    if (!par) return;
    // par 格式: "#配方ID"（如 "#1"）
    var rid = parseInt(par.substr(1));
    if (!(rid >= 1 && rid <= 115)) return;

    var recipe = WORLD.LIANYAO_BYID(rid);
    if (!recipe) return;

    this.recipe = recipe;
    this.path = "drug/dan#" + rid;
    this.grade = recipe.grade;
    this.name = recipe.name;
    this.desc = "这是一颗" + recipe.quality + "品质的" + recipe.name + "，服用后" +
        (recipe.effectDesc || "随机提升武学等级") + "。";
    // 丹药价值按品质分级
    this.value = [200, 2000, 20000, 100000, 680000, 4000000][recipe.grade];
    this.duration = DURATIONS[recipe.grade];
};
