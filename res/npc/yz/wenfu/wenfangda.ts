this.inherits(NPC);
this.set({
    name: "温方达",
    title: "温家五老",
    desc: "他是温家五老中的大老。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 90000,
    max_hp: 90000,
    mp: 40000,
    max_mp: 40000,
    score: 0,
    prop: {
        gj: 660,
        mz: 660,
        ds: 660,
        zj: 660,
        fy: 660
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
    ["jinshejianfa", 430, "sword"],
    ["jinsheyoushenbu", 420, "dodge"],
    ["jinshezhang", 420, "unarmed"],
    ["baguaquan", 360, "unarmed"],
    ["baguagun", 360, ["parry", "staff"]]
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
    obj: ["eq/lv1/jinshezhui", "eq/lv2/js_ring", "eq/lv2/js_pifeng", "eq/lv2/js_nang", "book/bc#baguaquan", "book/bc#baguagun", "book/bc#jinshejianfa", "book/bc#jinshezhang", "book/bc#jinsheyoushenbu", "eq/lv2/bagua_gun", "eq/lv2/jinshe_jian"],
    odds: 3500
}
);
this.set_chat_msg([
    "温方达喝道：温府岂是你说闯就闯的地方！",
    "温方达沉声说道：五老同心，金蛇郎君也休想轻易脱身。"
]);
this.on_died = function (killer) {
    if (killer && this.die_room && this.die_room.is_fb()) {
        killer.notify("温方达败下阵来，温家五老阵势缺了一角。");
    }
}
