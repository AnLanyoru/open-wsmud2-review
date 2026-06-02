this.inherits(NPC);
this.set({
    name: "曲非烟",
    title: "古灵精怪",
    desc: "他是曲非烟。",
    gender: 2,
    age: 35,
    per: 24,
    hp: 20000,
    max_hp: 20000,
    mp: 20000,
    max_mp: 20000,
    score: 0,
    prop: {
        gj: 520,
        mz: 520,
        ds: 520,
        zj: 520,
        fy: 520
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv0/jian", 1, 1
]);
this.skill_map(
    ["dodge", 600],
    ["parry", 600],
    ["force", 600],
    ["unarmed", 600],
    ["sword", 600],
    ["blade", 600],
    ["staff", 560],
    ["whip", 560],
    ["throwing", 540],
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
