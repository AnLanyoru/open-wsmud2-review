this.inherits(ROOM);
this.name = "雪地";
this.desc = "到处都是白茫茫的一片，你已经分不清方向了。";

this.exits = {"west": "bj/guanwai/xuedi1"};

this.on_enter = wrong_snow;

function wrong_snow(me) {
    if (me && me.is_player) me.notify("到处都是白茫茫的一片，你已经分不清方向了，就走这边吧......");
}
