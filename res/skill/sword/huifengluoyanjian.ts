this.inherits(SKILL);
this.name = "回风落雁剑";
this.id = "huifengluoyanjian";
this.grade = 3;
this.desc = "衡山派名剑，剑势回旋如风，落点清奇。";
this.can_enables = ["sword", "parry"];
this.attack_actions = [
    "$N长剑回旋，一招「回风落雁」斜斜刺向$n",
    "$N身形一飘，$w从半空落下，点向$n的$l",
    "$N剑光一折，似回风卷叶般掠过$n周身"
];
this.learn_condition = {
    max_mp: 2400,
    skill: {
        sword: 350
    }
};
this.query_enable_prop = function (lv) {
    return {
        sword: {
            gj: parseInt(lv * 1.5) + 25,
            mz: parseInt(lv * 1.45) + 20,
            dex: parseInt(lv / 7)
        },
        parry: {
            zj: parseInt(lv * 1.25) + 10
        }
    };
}
