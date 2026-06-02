this.inherits(NPC);
this.set({
    name: "余沧海",
    title: "青城派掌门",
    desc: "他是余沧海。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 180000,
    max_hp: 180000,
    mp: 180000,
    max_mp: 180000,
    score: 25,
    prop: {
        gj: 840,
        mz: 840,
        ds: 840,
        zj: 840,
        fy: 840
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
this.set_chat_msg([
    "余沧海冷哼道：青城松风剑法，岂容外人小觑。",
    "余沧海说道：福威镖局的事，轮不到你来问。",
    "余沧海目光阴鸷，手中长剑微微颤动。"
]);
this.on_died = function (killer) {
    if (!killer || !this.die_room || !this.die_room.is_fb()) return;
    killer.notify("余沧海败下阵来，青城山上杀气终于散去。");
}
