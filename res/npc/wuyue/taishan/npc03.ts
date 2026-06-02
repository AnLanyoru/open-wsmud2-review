this.inherits(NPC);
this.set({
    name: "玉玑子",
    title: "",
    desc: "他是泰山派的长老，是现任泰山掌门的师叔。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 220000,
    max_hp: 220000,
    mp: 220000,
    max_mp: 220000,
    score: 25,
    prop: {
        gj: 900,
        mz: 900,
        ds: 900,
        zj: 900,
        fy: 900
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
    obj: ["book/bc#panshishengong", "eq/lv2/ts_hufu"],
    odds: 3500
}
);
this.set_chat_msg([
    "玉玑子说道：泰山派长老在此，岂容你乱闯玉皇顶。",
    "玉玑子按剑而立，盘石神功气息沉稳。"
]);
this.on_died = function (killer) {
    if (!killer || !this.die_room || !this.die_room.is_fb()) return;
    killer.notify("玉玑子倒退数步，泰山玉皇顶之争终于分出胜负。");
}
