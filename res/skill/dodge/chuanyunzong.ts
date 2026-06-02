this.inherits(SKILL);
this.name = "穿云纵";
this.id = "chuanyunzong";
this.grade = 2;
this.desc = "衡山派轻功，纵跃如穿云而过。";
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
            ds: parseInt(lv * 1.55) + 25,
            dex: parseInt(lv / 7)
        }
    };
}
