this.inherits(AREA);
this.set({
    id: "henshan",
    name: "衡山",
    desc: "衡山副本。",
    score: 100,
    is_show: true,
    first: "wuyue/henshan/hengyang",
    is_copy: true,
    expend: 10,
    exp: 2400,
    pot: 2400,
    is_multi: false,
    room_path: "wuyue/henshan/",
    ss_title: "潇湘夜雨"
});
this.map = [
    { n: "衡阳城", id: "wuyue/henshan/hengyang", p: [0, 0], exits: ["west", "east"] },
    { n: "山路", id: "wuyue/henshan/shanlu", p: [-1, 0], exits: ["east", "north", "west"] },
    { n: "刘府大门", id: "wuyue/henshan/liufumen", p: [-1, 1], exits: ["south", "north"] },
    { n: "刘府大院", id: "wuyue/henshan/liufudayuan", p: [-1, 2], exits: ["south", "north"] },
    { n: "刘府大厅", id: "wuyue/henshan/liufudating", p: [-1, 3], exits: ["south", "north"] },
    { n: "西厢房", id: "wuyue/henshan/liufuwest", p: [-1, 4], exits: ["south", "east"] },
    { n: "东厢房", id: "wuyue/henshan/liufueast", p: [0, 4], exits: ["west"] },
    { n: "林间小道", id: "wuyue/henshan/xiaolu", p: [-2, 0], exits: ["east", "west"] },
    { n: "山涧", id: "wuyue/henshan/shanjian", p: [-3, 0], exits: ["east"] },
    { n: "衡阳西街", id: "wuyue/henshan/jiedao", p: [1, 0], exits: ["west", "southeast"] },
    { n: "南天门", id: "wuyue/henshan/nantianmen", p: [2, -1], exits: ["northwest", "south"] },
    { n: "狮子岩", id: "wuyue/henshan/shiziyan", p: [2, -2], exits: ["north", "east"] },
    { n: "祝融峰", id: "wuyue/henshan/zhurongfeng", p: [3, -2], exits: ["west", "south"] },
    { n: "祝融殿", id: "wuyue/henshan/zhurongdian", p: [3, -3], exits: ["north"] },
    { n: "望日台", id: "wuyue/henshan/wangritai", p: [2, -3], exits: ["north", "south"] }
];
this.drops = [
    "eq/lv2/hs_qin",
    "eq/lv2/qy_qinhuan",
    "eq/lv2/lfz_pao",
    "book/bc#chuanyunzong",
    "book/bc#liuyunzhang",
    "book/bc#zhenyuejue",
    "book/bc#hengshanwushenjian"
];
