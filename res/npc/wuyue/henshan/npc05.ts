this.inherits(NPC);
this.set({
    name: "嵩山弟子",
    title: "",
    desc: "他是嵩山派的一名弟子。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 50000,
    max_hp: 50000,
    mp: 50000,
    max_mp: 50000,
    score: 0,
    prop: {
        gj: 580,
        mz: 580,
        ds: 580,
        zj: 580,
        fy: 580
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
