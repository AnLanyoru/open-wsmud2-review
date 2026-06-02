this.inherits(SKILL);
this.name = "岱宗如何";
this.id = "daizongruhe";
this.grade = 3;
this.desc = "泰山派绝妙剑理，以算术推演敌势，后发先至。";
this.can_enables = ["sword", "parry"];
this.attack_actions = [
    "$N凝神不动，忽然一剑刺出，正中$n招式空隙",
    "$N默算方位，$w斜斜递出，封住$n退路",
    "$N剑势平平无奇，却恰好指向$n破绽"
];
this.learn_condition = {
    max_mp: 2600,
    skill: {
        sword: 360,
        literate: 120
    }
};
this.query_enable_prop = function (lv) {
    return {
        sword: {
            gj: parseInt(lv * 1.45) + 25,
            mz: parseInt(lv * 1.6) + 30,
            int: parseInt(lv / 8)
        },
        parry: {
            zj: parseInt(lv * 1.35) + 15
        }
    };
}
