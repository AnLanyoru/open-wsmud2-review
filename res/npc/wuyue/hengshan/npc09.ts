this.inherits(NPC);
this.set({
    name: "仪敏",
    title: "恒山派弟子",
    desc: "他是仪敏。",
    gender: 2,
    age: 35,
    per: 24,
    hp: 15000,
    max_hp: 15000,
    mp: 15000,
    max_mp: 15000,
    score: 0,
    prop: {
        gj: 510,
        mz: 510,
        ds: 510,
        zj: 510,
        fy: 510
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv0/jian", 1, 1
]);
this.skill_map(
    ["dodge", 590],
    ["parry", 590],
    ["force", 590],
    ["unarmed", 590],
    ["sword", 590],
    ["blade", 590],
    ["staff", 550],
    ["whip", 550],
    ["throwing", 530],
    ["hengshanshenfa", 470, "dodge"],
    ["hengshanjianfa", 470, "sword"],
    ["kuangfengkuaidao", 460, "blade"],
    ["baiyunxinfa", 450, "force"],
    ["tianchangzhang", 430, "unarmed"]
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
    obj: ["eq/lv2/kuangfengdao", "eq/lv2/tbg_mianzhao", "book/bc#kuangfengkuaidao", "book/bc#baiyunxinfa", "book/bc#hengshanshenfa", "book/bc#hengshanjianfa", "book/bc#tianchangzhang"],
    odds: 3500
}
);
