this.inherits(SKILL);
this.name = "狂风快刀";
this.id = "kuangfengkuaidao";
this.grade = 3;
this.desc = "田伯光赖以成名的快刀，刀势如狂风暴雨。";
this.can_enables = ["blade"];
this.attack_actions = [
    "$N手中$w一晃，一招「狂风骤起」斩向$n",
    "$N刀光连闪，快如疾风般劈向$n的$l",
    "$N反手一刀，$w带着尖啸横扫$n周身"
];
this.learn_condition = {
    max_mp: 2200,
    skill: {
        blade: 320
    }
};
this.query_enable_prop = function (lv) {
    return {
        blade: {
            gj: parseInt(lv * 1.45) + 25,
            mz: parseInt(lv * 1.35) + 20,
            gjsd: 200
        }
    };
}
this.pfm = {
    kuangfeng: {
        name: "狂风骤雨",
        distime: 12000,
        release_time: 500,
        enable_skill: "blade",
        mp: 20,
        use: function (me, target, lv) {
            me.send_room("<hiy>$N身形急转，使出「狂风骤雨」，刀光连绵罩向$n。</hiy>", target);
            for (var i = 0; i < 4; i++) {
                me.do_attack({
                    target: target,
                    gj: me.gj * 0.8,
                    mz: me.mz * 1.1,
                    attack_before: i ? "<hiy>紧跟着</hiy>" : ""
                });
            }
            me.end_attack(target);
        },
        query_desc: function () {
            return "快刀连环劈出四刀，每刀造成80%伤害并提高10%命中。";
        }
    }
};
