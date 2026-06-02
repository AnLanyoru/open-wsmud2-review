this.inherits(NPC);
this.set({
    name: "田伯光",
    title: "采花大盗",
    desc: "他是田伯光。",
    gender: 1,
    age: 35,
    per: 24,
    hp: 150000,
    max_hp: 150000,
    mp: 15000,
    max_mp: 15000,
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

this.on_died = function (killer) {
    if (!killer || !this.die_room || !this.die_room.is_fb()) return;

    var count = this.die_room.add_temp(killer, "fb/hengshan/tianboguang", 1);
    var score = count < 4 ? 30 : 10;
    killer.add_fbscore(score, 100);

    if (count >= 4) {
        killer.notify("田伯光狼狈败退，恒山之围终于解了。");
        return;
    }

    var rooms = [
        "wuyue/hengshan/hufengkou",
        "wuyue/hengshan/tongyuangu",
        "wuyue/hengshan/jianxingfeng",
        "wuyue/hengshan/zaitang",
        "wuyue/hengshan/liangongfang",
        "wuyue/hengshan/houdian"
    ];
    var room = ROOM.Get(rooms.random());
    if (room && this.die_room.owner) {
        room = room.query_copy(this.die_room.owner) || room;
    }
    if (room) {
        NPC.CREATE("wuyue/hengshan/npc11", room);
        killer.notify("田伯光身形一晃，竟又往恒山深处逃去。");
    }
}
