this.inherits(NPC);
this.set({
    name: "岑其斯",
    title: "五毒秀士",
    desc: "他是岑其斯。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 80000,
    max_hp: 80000,
    mp: 40000,
    max_mp: 40000,
    score: 15,
    prop: {
        gj: 640,
        mz: 640,
        ds: 640,
        zj: 640,
        fy: 640
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv0/tiezhang", 1, 1
]);
this.skill_map(
    ["dodge", 620],
    ["parry", 620],
    ["force", 620],
    ["unarmed", 620],
    ["sword", 620],
    ["blade", 620],
    ["staff", 580],
    ["whip", 580],
    ["throwing", 560],
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
