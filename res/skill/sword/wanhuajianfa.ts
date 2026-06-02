this.inherits(SKILL);
this.name = "万花剑法";
this.id = "wanhuajianfa";
this.grade = 3;
this.desc = "恒山派剑法，剑光如繁花散落，守中带攻。";
this.can_enables = ["sword", "parry"];
this.attack_actions = [
    "$N手中$w轻颤，一招「万花纷谢」点向$n的$l",
    "$N剑势圆转，$w化作数朵剑花罩住$n",
    "$N脚下连退半步，反手一剑刺向$n空门"
];
this.learn_condition = {
    max_mp: 2200,
    skill: {
        sword: 320
    }
};
this.query_enable_prop = function (lv) {
    return {
        sword: {
            gj: parseInt(lv * 1.35) + 20,
            mz: parseInt(lv * 1.35) + 20,
            fy: parseInt(lv * 1.2) + 15
        },
        parry: {
            zj: parseInt(lv * 1.3) + 10
        }
    };
}
