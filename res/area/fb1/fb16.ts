this.inherits(AREA);
this.set({
    id: "taishan",
    name: "泰山",
    desc: "泰山副本。",
    score: 65,
    is_show: true,
    first: "wuyue/taishan/daizong",
    is_copy: true,
    expend: 10,
    exp: 2500,
    pot: 2500,
    is_multi: false,
    room_path: "wuyue/taishan/",
    ss_title: "泰山长老"
});
this.map = [
    { n: "岱宗坊", id: "wuyue/taishan/daizong", p: [0, 0], exits: ["northup"] },
    { n: "一天门", id: "wuyue/taishan/yitian", p: [0, 1], exits: ["southdown", "northup"] },
    { n: "二天门", id: "wuyue/taishan/ertian", p: [0, 2], exits: ["southdown", "northup"] },
    { n: "十八盘", id: "wuyue/taishan/shiba1", p: [0, 3], exits: ["southdown", "northup"] },
    { n: "龙门", id: "wuyue/taishan/longmen", p: [0, 4], exits: ["southdown", "northup"] },
    { n: "十八盘", id: "wuyue/taishan/shiba2", p: [0, 5], exits: ["southdown", "northup"] },
    { n: "升仙坊", id: "wuyue/taishan/shengxian", p: [0, 6], exits: ["southdown", "northup"] },
    { n: "十八盘", id: "wuyue/taishan/shiba3", p: [0, 7], exits: ["southdown", "northup"] },
    { n: "南天门", id: "wuyue/taishan/nantian", p: [0, 8], exits: ["southdown", "northup"] },
    { n: "玉皇顶", id: "wuyue/taishan/yuhuang", p: [0, 9], exits: ["southdown"] }
];
this.drops = [
    "eq/lv2/ts_shoes",
    "eq/lv2/ts_hufu",
    "book/bc#taishanquanfa",
    "book/bc#taishanjianfa",
    "book/bc#panshishengong"
];
