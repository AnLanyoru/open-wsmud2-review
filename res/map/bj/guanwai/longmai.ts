this.inherits(ROOM);
this.name = "龙脉";
this.desc = "山势在此聚拢，传闻藏着闯王宝藏的线索。";

this.exits = {"south": "bj/guanwai/pubu"};

this.set_item("baozang", "闯王宝藏", "石壁深处藏着几口旧箱，封泥上还残留着昔年印记。", [
    ["search", "搜索宝藏", search_treasure]
]);

function search_treasure(me) {
    if (!has_longmai_map(me)) {
        return me.notify("这里山势盘结如迷宫，没有龙脉地图，搜了半天也找不到宝藏所在。");
    }
    if (me.query_skill("dodge", 0) < 300) {
        return me.notify("山腹中乱石湿滑，你基本轻功不足，没法深入搜索。");
    }
    if (me.str + me.query_prop("str") < 71) {
        return me.notify("宝藏外的石箱太沉，你臂力不足，搬不动封石。");
    }
    if (me.query_temp("fb/guanwai/treasure")) {
        return me.notify("这里的宝藏已经被你搜过了。");
    }
    me.set_temp("fb/guanwai/treasure", 1);
    me.add_obj(["book/book#unarmed", "book/book#force", "book/book#dodge", "book/book#parry", "book/book#sword", "book/book#blade"].random());
    me.add_obj("st/xuanjing", 20);
    me.add_obj(["st/st_blu", "st/st_red", "st/st_gre", "st/st_yel"].random(), 3);
    me.add_exp(0, 0, 200000);
    me.notify("你依图搜索龙脉，果然找到闯王宝藏，获得秘籍、黄金、玄晶和宝石。");
}

function has_longmai_map(me) {
    return me.query_temp("map42") || me.find_obj_bypath("sp/bj/map");
}
