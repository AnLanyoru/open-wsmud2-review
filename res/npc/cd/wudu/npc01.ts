this.inherits(NPC);
this.set({
    name: "五毒教徒",
    title: "",
    desc: "他是五毒教徒。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 20000,
    max_hp: 20000,
    mp: 4000,
    max_mp: 4000,
    score: 5,
    prop: {
        gj: 520,
        mz: 520,
        ds: 520,
        zj: 520,
        fy: 520
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv0/tiezhang", 1, 1
]);
this.skill_map(
    ["dodge", 600],
    ["parry", 600],
    ["force", 600],
    ["unarmed", 600],
    ["sword", 600],
    ["blade", 600],
    ["staff", 560],
    ["whip", 560],
    ["throwing", 540],
    ["wudushengong", 460, "force"],
    ["wudugoufa", 450, ["parry", "whip"]],
    ["qianzhuwandushou", 450, "unarmed"],
    ["wuduyanluobu", 430, "dodge"]
);

this.set_drop(
{
    obj: "money/silver",
    min: 5,
    max: 25
}, {
    obj: ["eq/lv0/cloth", "eq/lv0/dao", "eq/lv0/jian", "eq/lv0/tiezhang"],
    odds: 8000
}, {
    obj: ["book/bc#wudushengong", "book/bc#wuduyanluobu", "book/bc#wudugoufa", "book/bc#qianzhuwandushou", "eq/lv2/wd_shou", "eq/lv2/wd_tou", "eq/lv2/jinshe_jian_fake"],
    odds: 3500
}
);

this.on_enter = function (me) {
    if (me && me.is_player && !this.is_fighting()) this.do_kill(me);
}
