this.inherits(NPC);
this.set({
    name: "温仪",
    title: "温家小姐",
    desc: "她是温家小姐，神情忧虑。",
    gender: 2,
    age: 35,
    per: 24,
    hp: 12000,
    max_hp: 12000,
    mp: 12000,
    max_mp: 12000,
    score: 0,
    prop: {
        gj: 504,
        mz: 504,
        ds: 504,
        zj: 504,
        fy: 504
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv0/jian", 1, 1
]);
this.skill_map(
    ["dodge", 584],
    ["parry", 584],
    ["force", 584],
    ["unarmed", 584],
    ["sword", 584],
    ["blade", 584],
    ["staff", 544],
    ["whip", 544],
    ["throwing", 524],
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
    "温仪轻声说道：金蛇郎君一生恩怨，终究都落在温家。",
    "温仪神色黯然，低声念着夏雪宜的名字。",
    "温仪说道：若你能破了温家五老的阵势，也许能见到那段旧事的真相。"
]);
this.set_ask("夏雪宜", function (me) {
    me.notify("温仪低声说道：他被人称作金蛇郎君，可在我眼里，只是一个被仇恨困住的人。");
});
this.set_ask("温家五老", function (me) {
    me.notify("温仪说道：五老在亭中布下木桩阵，不破此阵，谁也走不到这里。");
});
