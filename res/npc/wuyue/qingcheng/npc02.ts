this.inherits(NPC);
this.set({
    name: "洪人雄",
    title: "青城派内门弟子",
    desc: "他是洪人雄。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 15000,
    max_hp: 15000,
    mp: 15000,
    max_mp: 15000,
    score: 15,
    prop: {
        gj: 510,
        mz: 510,
        ds: 510,
        zj: 510,
        fy: 510
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv0/jian", 1, 1
]);
this.skill_map(
    ["dodge", 590],
    ["parry", 590],
    ["force", 590],
    ["unarmed", 590],
    ["sword", 590],
    ["blade", 590],
    ["staff", 550],
    ["whip", 550],
    ["throwing", 530],
    ["songfengjianfa", 480, "sword"],
    ["cuixinzhang", 480, "unarmed"],
    ["tagexing", 460, "dodge"]
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
    obj: ["book/bc#tagexing", "book/bc#cuixinzhang", "book/bc#songfengjianfa"],
    odds: 3500
}
);
