this.inherits(NPC);
this.set({
    name: "左冷禅",
    title: "嵩山派掌门",
    desc: "他是左冷禅。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 200000,
    max_hp: 200000,
    mp: 200000,
    max_mp: 200000,
    score: 25,
    prop: {
        gj: 880,
        mz: 880,
        ds: 880,
        zj: 880,
        fy: 880
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
    ["dasongyangshenzhang", 590, "unarmed"],
    ["hanbingzhenqi", 590, "force"],
    ["songshanjianfa", 580, "sword"],
    ["shiqilushenjian", 580, "sword"]
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
    obj: ["book/bc#dasongyangshenzhang", "book/bc#songshanjianfa", "eq/lv2/wuyuelingqi", "eq/lv2/mengzhu_pifeng", "book/bc#hanbingzhenqi"],
    odds: 3500
}
);
this.set_chat_msg([
    "左冷禅冷冷说道：五岳并派乃大势所趋，谁敢阻我？",
    "左冷禅运起寒冰真气，四周骤然一冷。",
    "左冷禅喝道：嵩山十三太保何在！"
]);
this.on_died = function (killer) {
    if (!killer || !this.die_room || !this.die_room.is_fb()) return;
    killer.notify("左冷禅寒冰真气散尽，五岳并派的野心也随之瓦解。");
}
