this.inherits(ROOM);
this.name = "大门";
this.desc = "温府门庭深沉，两侧家丁眼神不善。";

this.exits = {"north": "yz/wenfu/dayuan"};
this.set_item("tree", "参天大树", "墙边有一株参天大树，枝叶伸入院内，看起来可以借力跳上去。", [
    ["climb", "爬上去", climb_tree],
    ["jump", "跳上去", climb_tree]
]);

function climb_tree(me) {
    if (me.query_skill("dodge", 0) < 500) {
        return me.notify("你纵身一跃，离树枝还差了一截。");
    }
    me.set_temp("fb/wenfu/tree", 1);
    me.send_room("$N足尖一点，借着树枝翻入温府。");
    me.moveto("yz/wenfu/dayuan", null, me.name + "从树上轻轻落下。");
}
