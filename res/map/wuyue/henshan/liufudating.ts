this.inherits(ROOM);
this.name = "刘府大厅";
this.desc = "刘府大厅里就安静多了。主人坐在太师椅上，神色抑郁。旁边坐着一刘府大厅里就安静多了。主人坐在太师椅上，神色抑郁。旁边坐着一个黑衣老人，神情显得极为关切。老人膝上靠着一个小女孩。大厅正中放着一张茶几，上面铺了锦缎。一只金光灿烂、径长尺半的黄金盆子，放在茶几之上，盆中已盛满了清水。";

this.exits = {"south": "wuyue/henshan/liufudayuan", "north": "wuyue/henshan/liufuwest"};

this.set_npc("wuyue/henshan/npc07", "wuyue/henshan/npc08", "wuyue/henshan/npc09", "wuyue/henshan/npc10");

this.on_enter = function (me) {
    if (!me || !me.is_player) return;
    var liu = this.find_by_path("wuyue/henshan/npc09");
    var fei = this.find_by_path("wuyue/henshan/npc10");
    if (!liu || !fei || fei.is_fighting()) return;
    this.notify("费彬喝道：刘正风勾结魔教，今日谁也救不了他！");
    fei.do_kill(liu);
    liu.do_kill(fei);
}
