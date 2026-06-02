this.inherits(SKILL);
this.name = "金蛇剑法";
this.id = "jinshejianfa";
this.grade = 3;
this.desc = "金蛇郎君所创剑法，剑路奇诡，常从不可思议处刺出。";
this.can_enables = ["sword", "parry"];
this.attack_actions = [
    "$N手中$w一抖，一招「金蛇吐信」刺向$n的$l",
    "$N身形斜走，$w划出一道弯弯金线，直取$n要害",
    "$N一招「灵蛇盘枝」，剑光缠绕着$n周身游走",
    "$N忽然低身进步，$w从肋下钻出，刺向$n的$l"
];
this.learn_condition = {
    max_mp: 2000,
    skill: {
        sword: 300
    }
};
this.query_enable_prop = function (lv) {
    return {
        sword: {
            gj: parseInt(lv * 1.5) + 20,
            mz: parseInt(lv * 1.4) + 20,
            dex: parseInt(lv / 8)
        },
        parry: {
            zj: parseInt(lv * 1.2) + 10
        }
    };
}
this.pfm = {
    kuangwu: {
        name: "金蛇狂舞",
        distime: 12000,
        release_time: 800,
        enable_skill: "sword",
        mp: 20,
        use: function (me, target, lv) {
            me.send_room("<hiy>$N剑势忽转，使出「金蛇狂舞」，剑光如金蛇盘旋直取$n。</hiy>", target);
            for (var i = 0; i < 3; i++) {
                me.do_attack({
                    target: target,
                    gj: me.gj * 0.9,
                    mz: me.mz * 1.15,
                    attack_before: i ? "<hiy>紧跟着</hiy>" : ""
                });
            }
            me.end_attack(target);
        },
        query_desc: function () {
            return "以诡异剑路连刺敌人三剑，每剑造成90%伤害并提高15%命中。";
        }
    }
};
