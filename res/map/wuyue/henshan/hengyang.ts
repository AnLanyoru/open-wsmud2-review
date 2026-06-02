this.inherits(ROOM);
this.name = "衡阳城";
this.desc = "这里就是衡阳县城。衡阳地处偏远，显见远不如中原繁华了。";

this.exits = {"west": "wuyue/henshan/shanlu", "east": "wuyue/henshan/jiedao"};

this.set_npc(["wuyue/henshan/npc01", 2]);
