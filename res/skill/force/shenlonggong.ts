this.inherits(SKILL);
this.name = "神龙功";
this.id = "shenlonggong";
this.grade = 3;
this.force_rad = 0.75;
this.desc = "神龙教秘传内功，练成后气血绵长，身法诡谲。";
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
            max_hp: lv * 9,
            limit_mp: lv * 80,
            fy: parseInt(lv * 1.2) + 20,
            desc: "唯一：将你内力的75%转化为气血"
        }
    };
}
