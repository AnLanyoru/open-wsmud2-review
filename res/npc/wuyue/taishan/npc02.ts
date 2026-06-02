this.inherits(NPC);
this.set({
    name: "玉音子",
    title: "",
    desc: "他是泰山派的长老，是现任泰山掌门的师叔。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 170000,
    max_hp: 170000,
    mp: 170000,
    max_mp: 170000,
    score: 20,
    prop: {
        gj: 820,
        mz: 820,
        ds: 820,
        zj: 820,
        fy: 820
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv0/jian", 1, 1
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
    ["taishanquanfa", 530, "unarmed"],
    ["taishanjianfa", 520, "sword"],
    ["panshishengong", 520, "force"]
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
    obj: ["book/bc#taishanjianfa"],
    odds: 3500
}
);
