this.inherits(NPC);
this.set({
    name: "四象守护",
    desc: "他是武道塔顶四象试炼的守护者。",
    title: "<hio>四象试炼</hio>",
    gender: 1,
    age: 40,
    per: 45,
    no_refresh: true,
    no_fight: true
});

const SS_NAMES = ["青龙", "白虎", "玄武", "朱雀"];
const SS_SKILLS = [
    ["force", 2600], ["unarmed", 2600], ["sword", 2600], ["parry", 2600], ["dodge", 2600],
    ["jiuyangshengong", 2600, "force"], ["liumaishenjian", 2600, "unarmed"],
    ["dugujiujian", 2600, "sword"], ["qiankundanuoyi", 2600, "parry"], ["lingboweibu2", 2600, "dodge"]
];

this.init_from = function (player, index) {
    index = Math.max(0, Math.min(3, index || 0));
    this.ss_index = index;
    this.name = SS_NAMES[index] + "守护";
    this.desc = "他是武道塔顶" + SS_NAMES[index] + "台的守护者。";
    this.start_time = Date.now();
    let level = Math.max(1, player.query_temp("wd_level", 0) - 80);
    this.con = this.dex = this.int = this.str = 50 + index * 5;
    this.skill_map.apply(this, SS_SKILLS);
    this.set_objects(["eq/lv0/cloth", 1, 1], ["eq/lv0/jian", 1, 1]);
    this.hp = this.max_hp = 1000000 + level * 60000;
    this.mp = this.max_mp = parseInt(this.max_hp / 2);
    this.init();
    this.recount();
}

this.die = function (me) {
    let cost = Math.max(1, Math.ceil((Date.now() - (this.start_time || Date.now())) / 1000));
    let key = "wd_ss" + this.ss_index;
    let old = WORLD.DATA.query_temp(key, 0);
    if (!old || cost < old) {
        WORLD.DATA.set_temp(key, cost);
        WORLD.DATA.set_temp(key + "_n", me.name);
        COMMAND.DO("rumor", "听说" + me.name + "完成了武道塔" + SS_NAMES[this.ss_index] + "试炼，用时" + cost + "息。");
        if (me.environment && me.environment.parent) me.environment.parent.notify_update();
    }
    me.add_exp(50000, 50000);
    let item = me.add_obj("book/wd", 1);
    if (item) me.send("你获得了" + item.unit_name() + "。");
    me.notify("<hig>你通过了" + SS_NAMES[this.ss_index] + "试炼，用时" + cost + "息。</hig>");
    if (this.environment) this.environment.item_changed(this, false, this.name + "离开了。");
}
