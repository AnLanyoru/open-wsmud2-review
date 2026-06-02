this.inherits(NPC);
this.set({
    name: "温方施",
    title: "温家五老",
    desc: "他是温家五老之一。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 80000,
    max_hp: 80000,
    mp: 35000,
    max_mp: 35000,
    score: 0,
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
    "温方施说道：温家旧怨轮不到外人评说。",
    "温方施一掌拍出，掌风隐隐带着金蛇余毒。"
]);
this.on_died = function (killer) {
    if (killer && this.die_room && this.die_room.is_fb()) {
        killer.notify("温方施倒下，温家五老阵势终于散乱。");
    }
}
