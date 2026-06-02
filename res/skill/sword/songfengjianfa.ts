this.inherits(SKILL);
this.name = "松风剑法";
this.id = "songfengjianfa";
this.grade = 3;
this.desc = "青城派剑法，出剑如松涛卷风，连绵不绝。";
this.can_enables = ["sword", "parry"];
this.attack_actions = [
    "$N手中$w横削，一招「松涛万壑」斩向$n",
    "$N剑随身转，$w带起一阵劲风刺向$n的$l",
    "$N脚下飘忽，剑光从侧面疾点$n要害"
];
this.learn_condition = {
    max_mp: 2200,
    skill: {
        sword: 330
    }
};
this.query_enable_prop = function (lv) {
    return {
        sword: {
            gj: parseInt(lv * 1.45) + 20,
            mz: parseInt(lv * 1.35) + 20,
            dex: parseInt(lv / 8)
        },
        parry: {
            zj: parseInt(lv * 1.2) + 10
        }
    };
}
this.pfm = {
    jianyu: {
        name: "松风剑雨",
        distime: 14000,
        release_time: 700,
        enable_skill: "sword",
        mp: 20,
        use: function (me, target, lv) {
            me.send_room("<hig>$N剑随身转，使出「松风剑雨」，剑光如松涛卷向$n。</hig>", target);
            for (var i = 0; i < 3; i++) {
                me.do_attack({
                    target: target,
                    gj: me.gj,
                    mz: me.mz * 1.1,
                    attack_before: i ? "<hig>紧跟着</hig>" : ""
                });
            }
            me.end_attack(target);
        },
        query_desc: function () {
            return "剑势连绵如松涛，连续攻击敌人三剑，每剑提高10%命中。";
        }
    }
};
