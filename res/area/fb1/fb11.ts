this.inherits(AREA);
this.set({
    id: "wenfu",
    name: "温府",
    desc: "温家五老所居的府第，金蛇郎君的恩怨在此结下。",
    score: 100,
    is_show: true,
    first: "yz/wenfu/damen",
    is_copy: true,
    expend: 10,
    exp: 2000,
    pot: 2000,
    is_multi: false,
    room_path: "yz/wenfu/",
    ss_title: "温家五老"
});
this.map = [
    { n: "小楼", id: "yz/wenfu/xiaolou", p: [0, 0], exits: ["south"] },
    { n: "小院", id: "yz/wenfu/xiaoyuan", p: [0, 1], exits: ["south", "north"] },
    { n: "亭子", id: "yz/wenfu/tingzi", p: [0, 2], exits: ["south", "north"] },
    { n: "走廊尽头", id: "yz/wenfu/zoulang4", p: [0, 3], exits: ["southwest", "southeast", "north"] },
    { n: "走廊", id: "yz/wenfu/zoulang2", p: [-1, 4], exits: ["south", "northeast", "west"] },
    { n: "侧房", id: "yz/wenfu/cefang1", p: [-2, 4], exits: ["east"] },
    { n: "走廊", id: "yz/wenfu/zoulang5", p: [1, 4], exits: ["south", "northwest", "east"] },
    { n: "侧房", id: "yz/wenfu/cefang3", p: [2, 4], exits: ["west"] },
    { n: "走廊", id: "yz/wenfu/zoulang1", p: [-1, 5], exits: ["southeast", "north", "west"] },
    { n: "侧房", id: "yz/wenfu/cefang2", p: [-2, 5], exits: ["east"] },
    { n: "走廊", id: "yz/wenfu/zoulang3", p: [1, 5], exits: ["southwest", "north", "east"] },
    { n: "侧房", id: "yz/wenfu/cefang4", p: [2, 5], exits: ["west"] },
    { n: "大厅", id: "yz/wenfu/dating", p: [0, 6], exits: ["south", "northwest", "northeast"] },
    { n: "大院", id: "yz/wenfu/dayuan", p: [0, 7], exits: ["south", "north"] },
    { n: "大门", id: "yz/wenfu/damen", p: [0, 8], exits: ["north"] }
];
this.drops = [
    "eq/lv1/jinshezhui",
    "eq/lv2/js_ring",
    "eq/lv2/js_pifeng",
    "eq/lv2/js_nang",
    "book/bc#baguaquan",
    "book/bc#baguagun",
    "book/bc#jinshejianfa",
    "book/bc#jinshezhang",
    "book/bc#jinsheyoushenbu",
    "eq/lv2/bagua_gun",
    "eq/lv2/jinshe_jian"
];
