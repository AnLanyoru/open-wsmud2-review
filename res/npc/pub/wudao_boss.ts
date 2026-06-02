this.inherits(NPC);
this.set({
    name: "武道塔主",
    desc: "他是武道塔上层的守护者，气息沉稳如山。",
    title: "<hio>武道塔上层守护者</hio>",
    gender: 1,
    age: 60,
    per: 50,
    no_refresh: true,
    no_fight: true
});

const NAMES = ["青龙守", "白虎守", "玄武守", "朱雀守", "武道塔主"];
const SKILLS = [
    ["force", 3200], ["unarmed", 3200], ["sword", 3200], ["parry", 3200], ["dodge", 3200],
    ["taixuangong", 3200, "force"], ["xianglongzhang2", 3200, "unarmed"],
    ["xuantiejianfa", 3200, "sword"], ["qiankundanuoyi", 3200, "parry"], ["lingboweibu2", 3200, "dodge"]
];

this.init_from = function (player, level) {
    level = Math.max(1, Math.min(5, level || 1));
    this.wd_level = level;
    this.name = NAMES[level - 1];
    this.title = level >= 5 ? "<ord>武道塔主</ord>" : "<hio>武道塔上层守护者</hio>";
    this.con = this.dex = this.int = this.str = 60 + level * 10;
    this.skill_map.apply(this, SKILLS);
    this.set_objects(["eq/lv0/cloth", 1, 1], ["eq/lv0/jian", 1, 1]);
    this.hp = this.max_hp = 1600000 + level * level * 500000;
    this.mp = this.max_mp = parseInt(this.max_hp / 2);
    this.init();
    this.recount();
}

this.on_kill = function (me) {
    this.do_kill(me);
}

this.on_reward = function (me, lv) {
    let exp = 80000 + lv * 5000;
    me.add_exp(exp, exp);
    let items = [
        { obj: "book/wd", count: Math.max(1, Math.floor(lv / 10)) },
        { obj: "st/xuanjing", count: 5 + this.wd_level * 2 }
    ];
    items = OBJ.create_by_odds(items);
    for (let item of items) {
        let obj = me.add_obj(item);
        if (obj) me.send("你获得了" + item.unit_name() + "。");
    }
}
