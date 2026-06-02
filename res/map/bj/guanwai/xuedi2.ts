this.inherits(ROOM);
this.name = "雪地";
this.desc = "风雪稍歇，北面隐约露出一条荒路，像是通向一座小庙。";

this.exits = {"south": "bj/guanwai/xuedi1", "north": "bj/guanwai/huanglu"};

this.on_enter = function (me) {
    if (me && me.is_player) me.notify("你在雪地里辨认许久，终于看出北面有一条被风雪掩住的荒路。");
}
