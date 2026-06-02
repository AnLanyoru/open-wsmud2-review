this.inherits(SKILL);
this.name = "金蛇游身步";
this.id = "jinsheyoushenbu";
this.grade = 3;
this.desc = "金蛇郎君身法，行走如蛇，曲折难测。";
this.can_enables = ["dodge"];
this.learn_condition = {
    max_mp: 2000,
    skill: {
        dodge: 300
    }
};
this.query_enable_prop = function (lv) {
    return {
        dodge: {
            ds: parseInt(lv * 1.45) + 20,
            dex: parseInt(lv / 8)
        }
    };
}
