this.inherits(SKILL);
this.name = "摧心掌";
this.id = "cuixinzhang";
this.grade = 3;
this.desc = "青城派阴狠掌法，掌力透骨摧心。";
this.can_enables = ["unarmed", "parry"];
this.attack_actions = [
    "$N一掌推出，掌风阴冷，直逼$n心口",
    "$N沉肩坠肘，一招「摧心裂胆」拍向$n的$l",
    "$N掌影忽左忽右，阴劲暗藏，袭向$n要害"
];
this.learn_condition = {
    max_mp: 2200,
    skill: {
        unarmed: 330
    }
};
this.query_enable_prop = function (lv) {
    return {
        unarmed: {
            gj: parseInt(lv * 1.55) + 25,
            mz: parseInt(lv * 1.25) + 15,
            str: parseInt(lv / 9)
        },
        parry: {
            zj: parseInt(lv * 1.1) + 10
        }
    };
}
this.pfm = {
    duanmai: {
        name: "摧心断脉",
        distime: 18000,
        release_time: 1000,
        enable_skill: "unarmed",
        mp: 20,
        use: function (me, target, lv) {
            me.send_room("<hir>$N掌力阴狠，使出「摧心断脉」拍向$n心口。</hir>", target);
            if (me.do_attack({
                target: target,
                gj: me.gj * 2.0,
                mz: me.mz * 1.15
            })) {
                var sub = Math.max(1, parseInt(lv / 10));
                target.add_status({
                    id: "cuixinzhang",
                    name: "摧心",
                    desc: "心脉受损，根骨臂力下降",
                    prop: {
                        con: -sub,
                        str: -sub
                    },
                    duration: 15000,
                    downside: true,
                    override: 2
                }, me);
            }
            me.end_attack(target);
        },
        query_desc: function (me, lv) {
            var sub = Math.max(1, parseInt(lv / 10));
            return "以阴狠掌力重创敌人，造成200%伤害；命中后15秒内降低敌人臂力、根骨各" + sub + "点。";
        }
    }
};
