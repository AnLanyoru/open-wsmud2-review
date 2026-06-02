this.inherits(SKILL);
this.name = "泰山十八盘";
this.id = "taishanshibapan";
this.grade = 3;
this.desc = "泰山派轻身步法，借险峻山势辗转盘旋。";
this.can_enables = ["dodge"];
this.learn_condition = {
    max_mp: 2400,
    skill: {
        dodge: 350
    }
};
this.query_enable_prop = function (lv) {
    return {
        dodge: {
            ds: parseInt(lv * 1.6) + 30,
            dex: parseInt(lv / 7),
            fy: parseInt(lv * 0.8) + 10
        }
    };
}
