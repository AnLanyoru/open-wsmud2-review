this.inherits(AREA);
this.set({
    id: "qingcheng",
    name: "青城山",
    desc: "青城山副本。",
    score: 100,
    is_show: true,
    first: "wuyue/qingcheng/shanlu",
    is_copy: true,
    expend: 10,
    exp: 2300,
    pot: 2300,
    is_multi: false,
    room_path: "wuyue/qingcheng/",
    ss_title: "青城掌门"
});
this.map = [
    { n: "青城山路", id: "wuyue/qingcheng/shanlu", p: [0, 0], exits: ["westup"] },
    { n: "天师洞", id: "wuyue/qingcheng/tianshidong", p: [-1, 1], exits: ["eastdown", "north"] },
    { n: "古龙桥", id: "wuyue/qingcheng/gulongqiao", p: [-1, 2], exits: ["south", "northup"] },
    { n: "三弯九倒", id: "wuyue/qingcheng/sanwan", p: [-1, 3], exits: ["southdown", "eastup"] },
    { n: "上清宫", id: "wuyue/qingcheng/shangqing", p: [0, 4], exits: ["westdown", "northup"] },
    { n: "松风观", id: "wuyue/qingcheng/songfeng", p: [0, 5], exits: ["southdown", "north"] },
    { n: "穿廊门", id: "wuyue/qingcheng/zhongmen", p: [0, 6], exits: ["south", "north"] },
    { n: "走廊", id: "wuyue/qingcheng/zoulang", p: [0, 7], exits: ["south", "north"] },
    { n: "练武场", id: "wuyue/qingcheng/caochang", p: [0, 8], exits: ["south", "north", "east"] },
    { n: "上清殿", id: "wuyue/qingcheng/zhudian", p: [0, 9], exits: ["south"] },
    { n: "花园", id: "wuyue/qingcheng/huayuan", p: [1, 8], exits: ["west", "north"] },
    { n: "卧室", id: "wuyue/qingcheng/woshi", p: [1, 9], exits: ["south"] }
];
this.drops = [
    "book/bc#tagexing",
    "book/bc#cuixinzhang",
    "book/bc#songfengjianfa"
];
