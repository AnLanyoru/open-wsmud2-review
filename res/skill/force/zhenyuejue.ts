this.inherits(SKILL);
this.name = "镇岳诀";
this.id = "zhenyuejue";
this.grade = 3;
this.force_rad = 0.78;
this.desc = "衡山派内功法门，沉稳厚重，如镇五岳。";
this.can_enables = ["force"];
this.learn_condition = {
    max_mp: 2600,
    skill: {
        force: 350
    }
};
this.query_enable_prop = function (lv) {
    return {
        force: {
            max_hp: lv * 9,
            fy: parseInt(lv * 1.4) + 25,
            limit_mp: lv * 80,
            desc: "唯一：将你内力的78%转化为气血"
        }
    };
}
this.pfm = {
    zhenyue: {
        name: "镇岳",
        distime: 45000,
        release_time: 500,
        enable_skill: "force",
        mp: 20,
        use_type: 2,
        use: function (me, target, lv) {
            var time = 15000 + lv * 8;
            me.send_room("<hiy>$N沉气凝神，运起镇岳诀，气势沉稳如五岳镇身。</hiy>\n");
            me.add_status({
                id: "force",
                name: "镇岳",
                desc: "镇岳诀护体，提升防御和招架",
                prop: {
                    fy: parseInt(lv * 0.8),
                    zj: parseInt(lv * 0.8),
                    diff_sh_per2: 5
                },
                duration: time,
                override: 2,
                finish_msg: "$N镇岳真气渐渐平复。"
            });
        },
        query_desc: function (me, lv) {
            var time = (15000 + lv * 8) / 1000;
            return "运起镇岳诀，在" + time + "秒内提升自身防御、招架各" + parseInt(lv * 0.8) + "点，并额外获得5%伤害减免。";
        }
    }
};
