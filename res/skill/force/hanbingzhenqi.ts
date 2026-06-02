this.inherits(SKILL);
this.name = "寒冰真气";
this.id = "hanbingzhenqi";
this.grade = 4;
this.force_rad = 0.70;
this.desc = "嵩山派的绝学寒冰真气，至阴至寒，真气散发一股冰入骨髓的寒气。";
this.can_enables = ["force"];
this.learn_condition = {
    max_mp: 3200,
    skill: {
        force: 380
    }
};
this.query_enable_prop = function (lv) {
    return {
        force: {
            gj: parseInt(lv * 1756 / 1000),
            max_hp: lv * 20,
            limit_mp: lv * 145,
            desc: "唯一：将你内力的70%转化为气血"
        }
    };
}
this.pfm = {
    hanbing: {
        name: "寒冰",
        enable_skill: "force",
        mp: 18,
        release_time: 500,
        distime: 30340,
        use_type: 2,
        use: function (me, target, lv) {
            me.send_room("<hic>$N运起全身寒冰真气，四周寒意逼人。</hic>\n");
            me.add_status({
                id: "force",
                name: "寒冰",
                desc: "伤害附加寒冰真气",
                duration: 20000,
                prop: {
                    add_sh: 4000
                }
            });
        },
        query_desc: function () {
            return "运起全身真气，在20秒内，使自己的伤害附加4000寒冰伤害，并使攻击你的敌人冻结，在15秒内减慢35%攻击速度。";
        }
    }
};
