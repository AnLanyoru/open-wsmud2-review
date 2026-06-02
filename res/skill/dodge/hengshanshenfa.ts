this.inherits(SKILL);
this.name = "恒山身法";
this.id = "hengshanshenfa";
this.grade = 2;
this.desc = "恒山派轻身功夫，稳健绵密，进退有度。";
this.can_enables = ["dodge"];
this.learn_condition = {
    max_mp: 2200,
    skill: {
        dodge: 320
    }
};
this.query_enable_prop = function (lv) {
    return {
        dodge: {
            ds: parseInt(lv * 1.35) + 25,
            fy: parseInt(lv * 0.8) + 10,
            dex: parseInt(lv / 9)
        }
    };
}
