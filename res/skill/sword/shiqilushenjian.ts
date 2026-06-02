this.inherits(SKILL);
this.name = "十七路神剑";
this.id = "shiqilushenjian";
this.grade = 3;
this.desc = "嵩山派精妙剑招，十七路变化层层推进。";
this.can_enables = ["sword"];
this.attack_actions = [
    "$N一连变了三路剑势，$w忽左忽右刺向$n",
    "$N剑光连绵不断，一路紧接一路压向$n",
    "$N手中$w骤然加快，十七路变化封住$n周身"
];
this.learn_condition = {
    max_mp: 3000,
    skill: {
        sword: 380
    }
};
this.query_enable_prop = function (lv) {
    return {
        sword: {
            gj: parseInt(lv * 1.55) + 25,
            mz: parseInt(lv * 1.55) + 25,
            dex: parseInt(lv / 8)
        }
    };
}
