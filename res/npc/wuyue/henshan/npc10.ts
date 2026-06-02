this.inherits(NPC);
this.set({
    name: "费彬",
    title: "大嵩阳手",
    desc: "他是费彬。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 200000,
    max_hp: 200000,
    mp: 150000,
    max_mp: 150000,
    score: 0,
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
    ["hengshanwushenjian", 520, "sword"],
    ["zhenyuejue", 510, "force"],
    ["chuanyunzong", 500, "dodge"],
    ["liuyunzhang", 480, "unarmed"]
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
    obj: ["eq/lv2/hs_qin", "eq/lv2/qy_qinhuan", "eq/lv2/lfz_pao", "book/bc#chuanyunzong", "book/bc#liuyunzhang", "book/bc#zhenyuejue", "book/bc#hengshanwushenjian"],
    odds: 3500
}
);

this.on_died = function (killer) {
    if (!killer || !this.die_room || !this.die_room.is_fb()) return;
    var liu = this.die_room.find_by_path("wuyue/henshan/npc09");
    if (liu && liu.hp > 0) {
        killer.add_fbscore(100, 100);
        killer.notify("你救下刘正风，衡山金盆洗手之局终于解开。");
    } else {
        killer.notify("刘正风已经倒下，衡山之局终究没能救回。");
    }
}
