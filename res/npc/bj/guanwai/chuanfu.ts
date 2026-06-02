this.inherits(NPC);
this.set({
    name: "船夫",
    title: "松花江船夫",
    desc: "这是一个松花江上的船夫，脸上沟壑纵横，粗布短袄被江风吹得发硬。他常年往返两岸，专载进山采参的客人过江。",
    gender: 1,
    age: 45,
    per: 14,
    mp: 400,
    max_mp: 400,
    hp: 500,
    max_hp: 500
});
this.set_objects([
    "eq/lv0/cloth", 1, 1
]);
this.set_drop({
    obj: "sp/tool/diao#1",
    odds:500    
}, {
        obj: "sp/tool/diao#2",
        odds: 50
    });
this.set_chat_msg([
    "船夫搓着手说道：江上风急，要过江就交一两黄金。",
    "船夫抬头望了望天色，说道：再晚些风雪更大，船就不好走了。",
    "船夫说道：往西过了江，就是船厂，再往南便是一片雪地。"
]);
this.set_ask("过江", function (me) {
    me.notify("船夫说道：坐船到江对面一两黄金，风雪再大也给你送过去。");
    me.send_commands("give " + this.id + " 10000 money", "交钱坐船");
});
this.set_ask("船厂", function (me) {
    me.notify("船夫说道：江对岸有个旧船厂，过了船厂就是白茫茫的雪地，进山的人都要小心。");
});
this.on_leave = function (me, dir) {
    if (dir == "west") {
        me.notify("船夫一把拦住你：想过江？江面化冻了，没船可不行。坐船到江对面一两黄金。");
        me.set_temp("fb/guanwai/jiang", dir);
        me.send_commands("give " + this.id + " 10000 money", "交钱坐船");
        return false;
    } 
}
this.on_accept = function (me, obj, count) {
    if (obj == "money" && count == 10000) {
        if (me.moveto("bj/guanwai/jiang") != false) {
            me.notify("你在江上一路漂流，船夫辨着水势掌舵，一声「起锚」后小船张帆离岸。");
            me.send_room("船夫和$N上了船，一声「起锚」船就张帆离岸了......");
            return true;
        }
    }
}
