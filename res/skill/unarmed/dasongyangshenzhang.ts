this.inherits(SKILL);
this.name = "大嵩阳神掌";
this.id = "dasongyangshenzhang";
this.grade = 3;
this.desc = "大嵩阳神掌乃是嵩山派绝学，以变化繁复，出手迅捷见称。";
this.can_enables = ["unarmed"];
this.attack_actions = [
    "$N一式「无影神掌」，掌势如山压向$n",
    "$N掌风刚猛，直震得四周尘土飞扬",
    "$N双掌齐出，劲力雄浑地击向$n的$l"
];
this.learn_condition = {
    max_mp: 3000,
    skill: {
        unarmed: 380
    }
};
this.query_enable_prop = function (lv) {
    return {
        unarmed: {
            gj: parseInt(lv * 13 / 10),
            gjsd: 200,
            mz: parseInt(lv * 122 / 100)
        }
    };
}
this.pfm = {
    wuying: {
        name: "无影掌",
        enable_skill: "unarmed",
        mp: 18,
        release_time: 1530,
        distime: 13940,
        use: function (me, target, lv) {
            me.send_room("<hiy>$N掌影翻飞，一招「无影掌」直取$n。</hiy>", target);
            if (me.do_attack({
                target: target,
                gj: me.gj * 3,
                mz: me.mz
            })) {
                target.add_status({
                    id: "busy",
                    name: "忙乱",
                    is_busy: true,
                    duration: 8000,
                    downside: true
                }, me);
            }
            me.end_attack(target);
        },
        query_desc: function () {
            return "对敌人造成300%的伤害，命中后使敌人忙乱8秒。";
        }
    }
};
