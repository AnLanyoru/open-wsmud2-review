this.inherits(NPC);
this.set({
    name: "余人彦",
    title: "青城派少掌门",
    desc: "他是余人彦。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 20000,
    max_hp: 20000,
    mp: 20000,
    max_mp: 20000,
    score: 15,
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
    "eq/lv0/jian", 1, 1
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
