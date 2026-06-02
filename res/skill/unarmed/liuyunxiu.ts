this.inherits(SKILL);
this.name = "流云袖";
this.id = "liuyunxiu";
this.grade = 3;
this.desc = "衡山派袖功，衣袖如流云舒卷，暗含劲力。";
this.can_enables = ["unarmed", "parry"];
this.attack_actions = [
    "$N衣袖一拂，如流云卷向$n的$l",
    "$N双袖交错，袖底劲风直扫$n面门",
    "$N旋身挥袖，柔中带刚地击向$n"
];
this.learn_condition = {
    max_mp: 2400,
    skill: {
        unarmed: 350
    }
};
this.query_enable_prop = function (lv) {
    return {
        unarmed: {
            gj: parseInt(lv * 1.35) + 20,
            mz: parseInt(lv * 1.45) + 25,
            fy: parseInt(lv * 1.15) + 10
        },
        parry: {
            zj: parseInt(lv * 1.25) + 10
        }
    };
}
