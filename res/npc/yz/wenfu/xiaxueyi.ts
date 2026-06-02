this.inherits(NPC);
this.set({
    name: "夏雪宜",
    title: "金蛇郎君",
    desc: "他手持金蛇剑，眼神冷峻。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 120000,
    max_hp: 120000,
    mp: 60000,
    max_mp: 60000,
    score: 50,
    prop: {
        gj: 720,
        mz: 720,
        ds: 720,
        zj: 720,
        fy: 720
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
    "夏雪宜冷冷说道：温家欠我的血债，今日该还了。",
    "夏雪宜握紧金蛇剑，剑锋上寒光流转。",
    "夏雪宜说道：若非温仪，我早已让温家上下血流成河。"
]);
this.on_died = function (killer) {
    if (!killer || !this.die_room || !this.die_room.is_fb()) return;
    killer.notify("夏雪宜长叹一声，金蛇剑光渐渐黯去，温府旧怨终于暂时落幕。");
}
