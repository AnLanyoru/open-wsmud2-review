this.inherits(NPC);
this.set({
    name: "哑婆婆",
    title: "恒山派弟子",
    desc: "他是哑婆婆。",
    gender: 2,
    age: 35,
    per: 24,
    hp: 150000,
    max_hp: 150000,
    mp: 150000,
    max_mp: 150000,
    score: 0,
    prop: {
        gj: 780,
        mz: 780,
        ds: 780,
        zj: 780,
        fy: 780
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
