this.inherits(ROOM);
this.name = "大厅";
this.desc = "正厅里灯火昏暗，温家五老常在此议事。";

this.exits = {"south": "yz/wenfu/dayuan", "northwest": "yz/wenfu/zoulang1", "northeast": "yz/wenfu/zoulang3"};

this.set_npc("yz/wenfu/wenfangda");
this.on_enter = function (me) {
    if (!me || !me.is_player) return;
    if (me.query_temp("fb/wenfu/tree") && !me.query_temp("fb/wenfu/dodge")) {
        var npc = this.find_obj_bypath("yz/wenfu/wenfangda");
        if (npc) {
            me.notify("温方达喝道：哪里来的小贼，敢闯温府！");
            npc.do_kill(me);
        }
    }
}
this.on_leave = function (me, dir) {
    if (dir != "south" && me.query_temp("fb/wenfu/tree") && !me.query_temp("fb/wenfu/dodge")) {
        me.set_temp("fb/wenfu/dodge", 1);
        me.notify("你避开温方达，沿着长廊向温府深处掠去。");
    }
}
