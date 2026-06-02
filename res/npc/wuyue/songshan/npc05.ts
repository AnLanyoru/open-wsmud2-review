this.inherits(NPC);
this.set({
    name: "乐厚",
    title: "十三太保",
    desc: "他是乐厚。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 80000,
    max_hp: 80000,
    mp: 80000,
    max_mp: 80000,
    score: 15,
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
