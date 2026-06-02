this.inherits(NPC);
this.set({
    name: "何红药",
    title: "疤面丐婆",
    desc: "他是何红药。",
    gender: 2,
    age: 35,
    per: 24,
    hp: 98000,
    max_hp: 98000,
    mp: 4000,
    max_mp: 4000,
    score: 15,
    prop: {
        gj: 676,
        mz: 676,
        ds: 676,
        zj: 676,
        fy: 676
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
