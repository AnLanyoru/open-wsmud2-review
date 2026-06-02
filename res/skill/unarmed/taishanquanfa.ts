this.inherits(SKILL);
this.name = "泰山拳法";
this.id = "taishanquanfa";
this.grade = 2;
this.desc = "泰山派的拳法功夫";
this.can_enables = ["unarmed", "parry"];
this.attack_actions = [
    "$N一拳击出，如泰山压顶般砸向$n",
    "$N沉腰坐马，双拳连环攻向$n的$l",
    "$N拳势厚重，一招「石破天惊」轰向$n"
];
this.learn_condition = {
    max_mp: 2500,
    skill: {
        unarmed: 360
    }
};
this.query_enable_prop = function (lv) {
    return {
        unarmed: {
            gj: parseInt(lv * 131 / 100),
            str: parseInt(lv / 8),
            fy: parseInt(lv * 151 / 100)
        },
        parry: {
            zj: parseInt(lv * 131 / 100),
            fy: parseInt(lv * 12 / 10)
        }
    };
}
this.pfm = {
    yading: {
        name: "泰山压顶",
        enable_skill: "unarmed",
        mp: 90,
        release_time: 608,
        distime: 13940,
        use: function (me, target, lv) {
            me.send_room("<hiy>$N一招「泰山压顶」，拳势厚重如山，向$n当头压下。</hiy>", target);
            me.do_attack({
                target: target,
                gj: me.gj + me.fy * 2,
                mz: me.mz
            });
            me.end_attack(target);
        },
        query_desc: function () {
            return "对敌人造成你攻击力附加你200%防御的伤害";
        }
    }
};
