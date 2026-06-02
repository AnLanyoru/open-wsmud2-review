this.inherits(SKILL);
this.name = "踏歌行";
this.id = "tagexing";
this.grade = 2;
this.desc = "青城派的轻功身法";
this.can_enables = ["dodge"];
this.learn_condition = {
    max_mp: 2200,
    skill: {
        dodge: 330
    }
};
this.query_enable_prop = function (lv) {
    return {
        dodge: {
            ds: parseInt(lv * 134 / 100),
            dex: parseInt(lv * 126 / 1000)
        }
    };
}
this.pfm = {
    tagexing: {
        name: "踏歌行",
        distime: 30000,
        release_time: 500,
        enable_skill: "dodge",
        mp: 20,
        use_type: 2,
        use: function (me, target, lv) {
            var gj = parseInt(lv * 2);
            var ds = parseInt(lv * 5 / 2);
            me.send_room("<hig>$N步随歌转，身形忽地变得轻灵飘忽。</hig>\n");
            me.add_status({
                id: "dodge",
                name: "踏歌行",
                desc: "踏歌而行，提升自身攻击和躲闪",
                prop: {
                    gj: gj,
                    ds: ds
                },
                duration: 20000,
                override: 2,
                finish_msg: "$N的踏歌行身法渐渐平复。"
            });
        },
        query_desc: function (me, lv) {
            return "20秒内，提升自身攻击力" + parseInt(lv * 2) + "点，躲闪" + parseInt(lv * 5 / 2) + "点。";
        }
    }
};
