this.inherits(NPC);
this.set({
    name: "易直非",
    title: "神秘商人",
    desc: "他是易直非。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 400,
    max_hp: 400,
    mp: 400,
    max_mp: 400,
    score: 0,
    prop: {
        gj: 480,
        mz: 480,
        ds: 480,
        zj: 480,
        fy: 480
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv0/jian", 1, 1
]);
this.skill_map(
    ["dodge", 560],
    ["parry", 560],
    ["force", 560],
    ["unarmed", 560],
    ["sword", 560],
    ["blade", 560],
    ["staff", 520],
    ["whip", 520],
    ["throwing", 500],
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
