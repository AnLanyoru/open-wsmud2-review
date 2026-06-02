this.inherits(NPC);
this.set({
    name: "何铁手",
    title: "五毒仙子",
    desc: "他是何铁手。",
    gender: 2,
    age: 35,
    per: 24,
    hp: 120000,
    max_hp: 120000,
    mp: 40000,
    max_mp: 40000,
    score: 0,
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
this.set_chat_msg([
    "何铁手笑道：五毒教的毒，可不是只在兵刃上。",
    "何铁手轻轻拨弄铁钩，眼中笑意森然。",
    "何铁手说道：金蛇郎君的旧账，五毒教迟早也要算清。"
]);
this.on_died = function (killer) {
    if (!killer || !this.die_room || !this.die_room.is_fb()) return;
    killer.notify("何铁手脸色一变，五毒教阵脚大乱，毒雾也渐渐散去。");
    killer.add_fbscore(40, 120);
}
