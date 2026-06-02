this.inherits(SKILL);
this.name = "含沙射影";
this.id = "hanshashaying";
this.grade = 3;
this.desc = "五毒教暗器手法，出手隐蔽，毒沙细针令人防不胜防。";
this.can_enables = ["throwing"];
this.attack_actions = [
    "$N一扬手，一蓬细沙夹着寒光射向$n的$l",
    "$N袖底微动，数点寒星无声无息地打向$n",
    "$N侧身欺近，一招「含沙射影」罩向$n周身"
];
this.learn_condition = {
    max_mp: 2000,
    skill: {
        throwing: 300
    }
};
this.query_enable_prop = function (lv) {
    return {
        throwing: {
            gj: parseInt(lv * 1.4) + 20,
            mz: parseInt(lv * 1.6) + 30,
            dex: parseInt(lv / 8)
        }
    };
}
