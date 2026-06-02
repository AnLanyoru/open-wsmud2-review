this.inherits(SKILL);
this.name = "五毒钩法";
this.id = "wudugoufa";
this.grade = 3;
this.desc = "五毒教钩法，钩势诡异，专攻敌人破绽。";
this.can_enables = ["whip", "parry"];
this.attack_actions = [
    "$N手中$w一翻，一式「毒钩探穴」钩向$n的$l",
    "$N钩势忽左忽右，带着阴寒劲风划向$n",
    "$N斜身进步，$w绕过$n兵刃，反钩$n要害"
];
this.learn_condition = {
    max_mp: 2200,
    skill: {
        whip: 300
    }
};
this.query_enable_prop = function (lv) {
    return {
        whip: {
            gj: parseInt(lv * 1.45) + 20,
            mz: parseInt(lv * 1.35) + 20
        },
        parry: {
            zj: parseInt(lv * 1.25) + 10
        }
    };
}
this.pfm = {
    duhun: {
        name: "毒钩夺魂",
        distime: 16000,
        release_time: 900,
        enable_skill: "whip",
        mp: 20,
        use: function (me, target, lv) {
            me.send_room("<hig>$N手中$W钩势一翻，使出「毒钩夺魂」，专攻$n破绽。</hig>", target);
            if (me.do_attack({
                target: target,
                gj: me.gj * 1.8,
                mz: me.mz * 1.2,
                no_parry: true
            })) {
                target.add_status({
                    id: "wudugoufa",
                    name: "毒钩",
                    desc: "被五毒钩法破开护体真气",
                    prop: {
                        fy: -parseInt(lv * 0.45),
                        ds: -parseInt(lv * 0.35)
                    },
                    duration: 10000,
                    downside: true,
                    override: 2
                }, me);
            }
            me.end_attack(target);
        },
        query_desc: function (me, lv) {
            return "以毒钩专攻破绽，造成180%伤害且无法招架；命中后10秒内降低敌人防御" + parseInt(lv * 0.45) + "点、躲闪" + parseInt(lv * 0.35) + "点。";
        }
    }
};
