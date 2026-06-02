this.inherits(NPC);
this.set({
    name: "门派后勤管理员",
    desc: "他是你们门派里面负责发放弟子福利的人",
    gender: 1,
    age: 25,
    per: this.random(20) + 10,
    mp: 400,
    max_mp: 400,
    hp: 400,
    max_hp: 400,

});
this.skill_map(
    ["force", 100],
    ["dodge", 100],
    ["parry", 100],
    ["sword", 100],
    ["blade", 100],
    ["club", 100],
    ["staff", 100],
    ["whip", 100],
    ["unarmed", 100]);
this.on_create = function (path, par) {
    if (!par) return;
    this.family = FAMILIES[par.substr(1)];
    if (!this.family.customer) this.family.customer = {};
    if (this.family == FAMILIES.NONE) {
        this.name = "武馆后勤";
    }
}

const NEEDS_GJ = [500, 5000, 10000, 50000, 100000];
const NEEDS_LEVEL = [0, 3, 4, 5, 6];
const NEEDS_LEVEL_DESC = [null, "宗师", "武圣", "武帝", "武神"];
const MP_GOODS = [
    ["st/xuanjing", 27, 10],
    ["sp/tool/zhuisha#1", 1, 100],
    ["st/st_gre#4", 1, 100000],
    ["st/st_blu#2", 2, 1000],
    ["drug/exp", 1, 50],
    ["drug/skill2#1", 1, 10],
    ["eq/lv1/shuguang_jian", 1, 300],
    ["eq/lv1/shuguang_zan", 1, 200]
];

function create_mp_goods() {
    var list = [];
    for (var i = 0; i < MP_GOODS.length; i++) {
        var def = MP_GOODS[i];
        var obj = OBJ.CREATE(def[0], def[1]);
        if (!obj) continue;
        obj.value = def[2];
        obj.currency = "gongji";
        list.push(obj);
    }
    return list;
}

this.sell_title = "门派物品兑换";
this.query_sell_money = function (me) {
    return { gongji: me.query_temp("gongji", 0) };
}
this.on_sell = function (me) {
    if (me.family != this.family && !(this.family === FAMILIES.NONE && me.query_temp('wg_sr'))) {
        me.notify(this.name + "对你说道：这位" + me.call() + "和本派素无瓜葛。");
        return;
    }
    if (!this.family.customer) this.family.customer = {};
    var list = this.family.customer[me.id];
    if (!list) {
        list = create_mp_goods();
        this.family.customer[me.id] = list;
    }
    return list;
}
this.on_checkobj = function (me, objid) {
    var list = this.on_sell(me);
    return me.find_obj_byid(list, objid);
}
this.before_sell_item = function (me, sellitem, buy_count) {
    var need = sellitem.value * buy_count;
    var gj = me.query_temp('gongji', 0);
    if (gj < need) {
        me.notify(this.name + "对你说道：你没有那么多门派功绩。");
        return false;
    }
    me.add_temp('gongji', -need);
}
this.add_action("mp_goods", "兑换物资", function (me) {
    me.do_command("list", this.id);
});
this.add_action("mp_refresh", "刷新货物", function (me, par) {
    if (me.family != this.family && !(this.family === FAMILIES.NONE && me.query_temp('wg_sr'))) {
        return me.notify(this.name + "对你说道：这位" + me.call() + "和本派素无瓜葛。");
    }
    let count = me.query_temp("mp_ref_count", 0);
    if (count > 5) return me.notify(this.name + "对你说道：本门近日就这么多物资了。");
    let cost = [10, 20, 30, 40, 50, 60][count];
    if (par !== "ok") {
        me.notify(this.name + "对你说道：重新调拨物资需要" + cost + "点门派功绩。");
        return me.send_commands("mp_refresh " + this.id + " ok", "确定刷新");
    }
    if (me.query_temp('gongji', 0) < cost) {
        return me.notify(this.name + "对你说道：你的门派功绩不够。");
    }
    me.add_temp('gongji', -cost);
    me.add_temp("mp_ref_count", 1, UTIL.diff_time());
    if (!this.family.customer) this.family.customer = {};
    this.family.customer[me.id] = create_mp_goods();
    me.notify(this.name + "对你说道：本门新调拨的物资都在这里了，请过目。");
    me.do_command("list", this.id);
});
this.add_action("job_fam", "门派职位", function (me) {

    var fam = me.family;
    if (fam === FAMILIES.NONE) {
        if (!me.query_temp('wg_sr'))
            return me.notify(this.name +
                "对你说道：这位" + me.call() + "和本馆素无瓜葛，升职从何说起？");
    }
    if (fam != this.family) return me.notify(this.name +
        "对你说道：这位" + me.call() + "和本派素无瓜葛，升职从何说起？");
    let gj = me.query_temp('gongji', 0);
    let level = me.query_temp('sm_level', 0);
    if (level >= 5) return me.send(this.name +
        "对你说道：这位" + me.call() + "已经是最高级别的职位了。");

    me.send(`${this.name}说：你现在是${fam.query_job_title(level)}，消耗${gj}/${NEEDS_GJ[level]}可以晋升到${fam.query_job_title(level + 1)}。`);
    if (gj >= NEEDS_GJ[level]) {
        me.send_commands('job_up_ok ' + this.id, '确定晋升');
    }
});
this.add_action("job_up_ok", null, function (me) {

    var fam = me.family;
    if (fam != this.family) return me.notify(this.name +
        "对你说道：这位" + me.call() + "和本派素无瓜葛，升职从何说起？");
    if (fam === FAMILIES.NONE) {
        if (!me.query_temp('wg_sr'))
            return me.notify(this.name +
                "对你说道：这位" + me.call() + "和本馆素无瓜葛，升职从何说起？");
    }
    let level = me.query_temp('sm_level', 0);
    if (level >= 5) return me.send(this.name +
        "对你说道：这位" + me.call() + "已经是最高级别的职位了。");

    if (me.level < NEEDS_LEVEL[level])
        return me.send(`${this.name}说道：这位${me.call()}，${fam.query_job_title(level + 1)}可不是谁都能当的，最少得是${NEEDS_LEVEL_DESC[level]}才行。`);
    let gj = me.query_temp('gongji', 0);
    let need = NEEDS_GJ[level];
    if (gj >= NEEDS_GJ[level]) {
        me.add_temp('gongji', -need);
        USERTASK.GET('sm').on_finish(me);
        level = me.add_temp('sm_level', 1);
        me.send(`${this.name}说：恭喜你，现在是${me.family.query_task_title(me)}了，你的师门物资获得大幅度提升。`);

    } else {
        me.send(`${this.name}说：你的师门功绩还不够晋升，再努力一点吧。`);
    }
});
this.add_action("mp_reward", "领取战利品", function (me) {
    if (me.family != this.family) {
        return me.notify(this.name + "对你说道：这位" + me.call() + "和本派素无瓜葛。");
    }
    if (!me.family.battle_settle) return me.notify(this.name + "对你说道：最近没有可领取的战利品。");
    me.family.battle_settle(me);
});
