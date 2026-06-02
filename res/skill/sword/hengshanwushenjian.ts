this.inherits(SKILL);
this.name = "衡山五神剑";
this.id = "hengshanwushenjian";
this.grade = 3;
this.desc = "衡山派高深剑法，五路剑势各具神妙。";
this.can_enables = ["sword", "parry"];
this.attack_actions = [
    "$N一招「泉鸣芙蓉」，$w清越如泉刺向$n",
    "$N剑势一变，使出「鹤翔紫盖」削向$n的$l",
    "$N手中$w忽缓忽急，一式「天柱云气」罩向$n"
];
this.learn_condition = {
    max_mp: 2600,
    skill: {
        sword: 360
    }
};
this.query_enable_prop = function (lv) {
    return {
        sword: {
            gj: parseInt(lv * 1.55) + 25,
            mz: parseInt(lv * 1.45) + 20,
            dex: parseInt(lv / 8)
        },
        parry: {
            zj: parseInt(lv * 1.3) + 15
        }
    };
}
this.pfm = {
    wushen: {
        name: "五神剑",
        distime: 18000,
        release_time: 1000,
        enable_skill: "sword",
        mp: 20,
        use: function (me, target, lv) {
            me.send_room("<hic>$N剑势连变，使出衡山「五神剑」，五路剑意齐发。</hic>", target);
            for (var i = 0; i < 5; i++) {
                me.do_attack({
                    target: target,
                    gj: me.gj * 0.75,
                    mz: me.mz * 1.1,
                    attack_before: i ? "<hic>紧跟着</hic>" : ""
                });
            }
            me.end_attack(target);
        },
        query_desc: function () {
            return "五路剑势齐发，连续攻击敌人五剑，每剑造成75%伤害并提高10%命中。";
        }
    }
};
