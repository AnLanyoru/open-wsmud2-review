this.inherits(NPC);
this.set({
    name: "洪安通",
    desc: "他就是武功盖世、令江湖人等谈之色变的神龙教教主洪安通。",
    title: "神龙教教主",
    gender: 1,
    age: 50,
    per: 26,
    mp: 1400,
    max_mp: 7400,
    hp: 10500,
    max_hp: 10500,
    pfm_rate: 1,
    score: 40,
    prop: {
        zj: -300,
        gj: 400
    }
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
], [
    "eq/lv2/sl_zhang", 1, 1
]);
this.skill_map(
    ["dodge", 350],
    ["parry", 350],
    ["force", 350],
    ["unarmed", 350],
    ["sword", 350],
    ["staff", 350],
    ["huagumianzhang", 450],
    ["yixingbufa", 350, "dodge"],
    ["shenlongxinfa", 350, "force"],
    ["shedaoqigong", 350, ["parry", "staff"]]);

this.set_drop({
    obj: "money/silver",
    min: 1,
    max: 5
}, {
    obj: ["eq/lv0/cloth", "eq/lv0/dao", "eq/lv0/jian", "eq/lv0/tiezhang"],
    odds: 8000
}, {
    obj: ["eq/lv2/sl_cloth", "eq/lv2/sl_tou", "eq/lv2/sl_shoes", "eq/lv2/sl_shou", "eq/lv2/sl_yao", "eq/lv2/sl_ci", "eq/lv2/sl_zhang", "eq/lv2/sl_ling"],
    odds: 3000
}, {
    obj: ["book/bc#shenlonggong", "book/bc#shenlongxinfa", "book/bc#yixingbufa", "book/bc#shedaoqigong", "book/bc#shenlongjian", "book/bc#huagumianzhang"],
    odds: 5000
});
this.on_kill = function (me) {
    this.send_room("洪安通喝到：来我们神龙教撒野？给我上！");
    this.each_item(item => {
        if (!item.is_player && item.hp > 0 && !item.master) {
            item.do_kill(me);
        }
    }, this.environment);
}
this.set_chat_msg([
    "洪安通厉声喝道：神龙教主，仙福永享，寿与天齐！",
    "洪安通冷笑道：敢闯神龙岛，就把命留下。",
    "洪安通环视众人，沉声道：五龙使何在？"
]);
this.on_died = function (killer) {
    if (!killer || !this.die_room || !this.die_room.is_fb()) return;
    killer.notify("洪安通倒下，神龙岛群蛇四散，神龙教的阴谋终于被你破开。");
}
