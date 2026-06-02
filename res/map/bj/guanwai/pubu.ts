this.inherits(ROOM);
this.name = "瀑布";
this.desc = "天池水从两百余尺高飞流跌落，轰鸣之声远传数里，水花直落大峪谷，与天然屏障玉壁、金壁相映，恰似白练当空，水柱扑向深深的谷底，溅起几丈高的飞浪，犹如仙女散花，阳光照射下，虹飞氤跃，瑰灿壮观之极。你可以先观察<cmd cmd='look dishi'> 地势(dishi) </cmd>，再试着从<cmd cmd='look pubu'> 瀑布(pubu) </cmd>下去。";

this.exits = {"west": "bj/guanwai/xiaotianchi"};

this.set_item("dishi", "地势", "瀑布落在山腹之间，水声虽急，石壁后似乎另有空隙。若想深入，必须先看清水势和落脚处。", [
    ["guancha", "观察地势", observe_terrain]
]);
this.set_item("pubu", "瀑布", "瀑布水势很急，若能看清地形，也许可以从水帘后找到去处。", [
    ["jump", "跳下去", jump_waterfall]
]);
this.set_item("shimen", "石门", "水帘后有一道厚重石门，门缝里透出阴冷的山风。", [
    ["open", "打开石门", open_gate]
]);

function observe_terrain(me) {
    if (me.query_skill("dodge", 0) < 300) {
        return me.notify("你在瀑布前转了几圈，身法不够，仍看不出安全落脚处。");
    }
    me.set_temp("fb/guanwai/dishi", 1);
    me.notify("你细看山势水流，记下瀑布后的几处落脚点。");
}

function jump_waterfall(me) {
    if (!me.query_temp("fb/guanwai/dishi")) {
        return me.notify("水势太急，还是先观察清楚地势再跳。");
    }
    me.set_temp("fb/guanwai/pubu", 1);
    me.notify("你纵身跃入水帘之后，果然在岩壁后发现一道石门。");
}

function open_gate(me) {
    if (!me.query_temp("fb/guanwai/pubu")) {
        return me.notify("瀑布水帘遮得严严实实，你还没找到石门的位置。");
    }
    if (!has_longmai_map(me)) {
        return me.notify("石门纹路和四周山势暗合，你没有龙脉地图，一时打不开。");
    }
    if (me.str + me.query_prop("str") < 71) {
        return me.notify("石门沉重异常，你臂力不足，推了半天也纹丝不动。");
    }
    if (!this.query_exits("north")) {
        this.add_exit("north", "bj/guanwai/longmai");
        me.notify("你按龙脉地图辨认方位，奋力推开石门，水帘后露出一条通往龙脉的石道。");
    } else {
        me.notify("石门已经打开了。");
    }
}

function has_longmai_map(me) {
    return me.query_temp("map42") || me.find_obj_bypath("sp/bj/map");
}
