this.inherits(SKILL);
this.name = "恒山慈悲心经";
this.id = "hengshancibeixinjing";
this.grade = 3;
this.force_rad = 0.78;
this.desc = "恒山派内功心法，慈悲守正，绵密悠长。";
this.can_enables = ["force"];
this.learn_condition = {
    max_mp: 2800,
    skill: {
        force: 320
    }
};
this.query_enable_prop = function (lv) {
    return {
        force: {
            max_hp: lv * 10,
            fy: parseInt(lv * 1.4) + 20,
            con: parseInt(lv / 8),
            limit_mp: lv * 85,
            desc: "唯一：将你内力的78%转化为气血"
        }
    };
}
