this.inherits(SKILL);
this.name = "五毒秘籍";
this.id = "wudumiji";
this.grade = 3;
this.force_rad = 0.72;
this.desc = "五毒教秘传总纲，兼论用毒、解毒和护体法门。";
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
            con: parseInt(lv / 9),
            limit_mp: lv * 70,
            desc: "唯一：将你内力的72%转化为气血"
        }
    };
}
