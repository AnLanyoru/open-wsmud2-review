this.inherits(ROOM);
this.name = "雪地";
this.desc = "这里是一片白茫茫的雪地，一眼望不到边际。四周一个人影也没有，厚厚的积雪踩起来发出咯吱的响声，大地上留下一串孤独的脚印。寒冷的北风呼啸而过，吹得脸生痛。暗淡的太阳低悬在天边，显得那么苍白。";

this.exits = {"north": "bj/guanwai/xuedi2", "east": "bj/guanwai/xuedi3", "south": "bj/guanwai/xuedi4", "west": "bj/guanwai/xuedi5"};

this.on_enter = snow_notice;

function snow_notice(me) {
    if (!me || !me.is_player) return;
    if (me.query_temp("fb/guanwai/snow_tip")) return;
    me.set_temp("fb/guanwai/snow_tip", 1, 8000);
    me.notify("寒冷的北风夹杂着雪花，像刀子一样刮在你的脸上。");
}
