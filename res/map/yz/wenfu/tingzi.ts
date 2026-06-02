this.inherits(ROOM);
this.name = "亭子";
this.desc = "庭中一树老梅斜出，寒香浮动。";

this.exits = {"south": "yz/wenfu/zoulang4", "north": "yz/wenfu/xiaoyuan"};
this.set_item("zhuang", "木桩", "亭中按八卦方位立着几根木桩，似乎暗合温家五老的阵势。", [
    ["tiao", "跳木桩", jump_stake],
    ["jump", "跳木桩", jump_stake]
]);

function jump_stake(me) {
        if (!me.query_temp("fb/wenfu/dodge")) {
            return me.notify("你看了半天，还是摸不清这些木桩的门道。");
        }
        var step = me.query_temp("fb/wenfu/stake", 0);
        if (!step) {
            me.set_temp("fb/wenfu/stake", 1);
            me.notify("你跃上木桩，温家五老同时现身，将你围在阵中。");
            NPC.CREATE("yz/wenfu/wenfangda", this, mark_wenfu_array_npc);
            NPC.CREATE("yz/wenfu/wenfangyi", this, mark_wenfu_array_npc);
            NPC.CREATE("yz/wenfu/wenfangshan", this, mark_wenfu_array_npc);
            NPC.CREATE("yz/wenfu/wenfangnan", this, mark_wenfu_array_npc);
            NPC.CREATE("yz/wenfu/wenfangshi", this, mark_wenfu_array_npc);
            return;
        }
        var npcs = ["yz/wenfu/wenfangda", "yz/wenfu/wenfangyi", "yz/wenfu/wenfangshan", "yz/wenfu/wenfangnan", "yz/wenfu/wenfangshi"];
        for (var i = 0; i < npcs.length; i++) {
            if (this.find_obj_bypath(npcs[i])) {
                return me.notify("温家五老阵势未破，你还不能继续深入。");
            }
        }
        if (step == 1) {
            me.set_temp("fb/wenfu/stake", 2);
            me.notify("你再次跃上木桩，阵势轰然散开，金蛇郎君现身。");
            NPC.CREATE("yz/wenfu/xiaxueyi", this);
        } else {
            me.notify("木桩阵已经被你破开了。");
        }
}

function mark_wenfu_array_npc(npc) {
    npc.score = 10;
    var player = npc.environment && npc.environment.find_me && npc.environment.find_me();
    if (player) npc.do_kill(player);
}
