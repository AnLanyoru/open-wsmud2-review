this.inherits(SKILL);
this.name = "嵩山剑法";
this.id = "songshanjianfa";
this.grade = 3;
this.desc = "嵩山派绝学，剑法气象森严，端严雄伟。";
this.can_enables = ["sword", "parry"];
this.attack_actions = [
    "$N剑势一沉，一招「万岳朝宗」压向$n",
    "$N手中$w大开大阖，剑风如山河倾倒",
    "$N踏前一步，$w挟着沉雄力道劈向$n"
];
this.learn_condition = {
    max_mp: 3000,
    skill: {
        sword: 380
    }
};
this.query_enable_prop = function (lv) {
    return {
        sword: {
            gj: parseInt(lv * 201 / 100),
            mz: parseInt(lv * 102 / 100),
            str: parseInt(lv / 8) + 2
        },
        parry: {
            zj: parseInt(lv * 231 / 100),
            max_hp: lv * 7,
            con: parseInt(lv / 8) + 2
        }
    };
}
this.pfm = {
    wanyue: {
        name: "万岳朝宗",
        enable_skill: "sword",
        mp: 0,
        release_time: 1771,
        distime: 5740,
        use: function (me, target, lv) {
            var damage = parseInt(me.mp * 0.3);
            me.add_mp(-damage);
            me.send_room("<hiy>$N剑势沉雄，一招「万岳朝宗」携五岳之势压向$n。</hiy>", target);
            target.damage(damage, me);
            me.end_attack(target);
        },
        query_desc: function () {
            return "威力巨大的一式剑法，消耗你30%的当前内力，对敌人造成等量伤害。";
        }
    }
};
