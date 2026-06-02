this.inherits(SKILL);
this.name = "五毒神功";
this.id = "wudushengong";
this.grade = 2;
this.force_rad = 0.72;
this.desc = "五毒教秘传内功，阴柔狠辣，善护五脏。";
this.can_enables = ["force"];
this.learn_condition = {
    max_mp: 2500,
    skill: {
        force: 300
    }
};
this.query_enable_prop = function (lv) {
    return {
        force: {
            max_hp: lv * 8,
            fy: parseInt(lv * 1.3) + 20,
            limit_mp: lv * 72,
            desc: "唯一：将你内力的72%转化为气血"
        }
    };
}
this.pfm = {
    duzhang: {
        name: "五毒护体",
        distime: 45000,
        release_time: 500,
        enable_skill: "force",
        mp: 20,
        use_type: 2,
        use: function (me, target, lv) {
            var time = 15000 + lv * 8;
            me.send_room("<hig>$N运起五毒神功，周身隐隐泛起一层碧色毒雾。</hig>\n");
            me.add_status({
                id: "force",
                name: "五毒护体",
                desc: "五毒真气护体，提升防御并附加毒伤",
                prop: {
                    fy_per: 30,
                    add_sh: parseInt(lv * 1.5)
                },
                duration: time,
                override: 2,
                finish_msg: "$N周身毒雾渐散，五毒真气归于丹田。"
            });
        },
        query_desc: function (me, lv) {
            var time = (15000 + lv * 8) / 1000;
            return "运起五毒真气，在" + time + "秒内提升自身防御30%，并使攻击附加" + parseInt(lv * 1.5) + "点毒伤。";
        }
    }
};
