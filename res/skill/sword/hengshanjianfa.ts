this.inherits(SKILL);
this.name = "恒山剑法";
this.id = "hengshanjianfa";
this.grade = 3;
this.desc = "恒山派剑法，守势森严，绵里藏针。";
this.can_enables = ["sword", "parry"];
this.attack_actions = [
    "$N一招「绵里藏针」，$w缓缓推出，剑气森然",
    "$N剑势一收一放，直取$n的$l",
    "$N退步回身，$w从袖底斜斜刺出"
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
            gj: parseInt(lv * 1.3) + 20,
            mz: parseInt(lv * 1.3) + 20,
            fy: parseInt(lv * 1.2) + 20
        },
        parry: {
            zj: parseInt(lv * 1.35) + 10
        }
    };
}
this.pfm = {
    cangzhen: {
        name: "绵里藏针",
        distime: 15000,
        release_time: 700,
        enable_skill: "sword",
        mp: 20,
        use: function (me, target, lv) {
            var time = 10000 + lv * 5;
            me.send_room("<hig>$N剑势一收一放，使出恒山剑法「绵里藏针」。</hig>", target);
            me.add_status({
                id: "sword",
                name: "绵里藏针",
                desc: "恒山剑法守中带攻",
                prop: {
                    zj: parseInt(lv * 0.8),
                    fy: parseInt(lv * 0.6)
                },
                duration: time,
                override: 2
            });
            me.do_attack({
                target: target,
                gj: me.gj * 1.2,
                mz: me.mz
            });
            me.end_attack(target);
        },
        query_desc: function (me, lv) {
            var time = (10000 + lv * 5) / 1000;
            return "守中带攻，在" + time + "秒内提升自身招架" + parseInt(lv * 0.8) + "点、防御" + parseInt(lv * 0.6) + "点，并刺出一剑造成120%伤害。";
        }
    }
};
