this.inherits(AREA);
this.set({
    id: "songshan",
    name: "嵩山",
    desc: "嵩山副本。",
    score: 190,
    is_show: true,
    first: "wuyue/songshan/taishi",
    is_copy: true,
    expend: 10,
    exp: 2600,
    pot: 2600,
    is_multi: false,
    room_path: "wuyue/songshan/",
    ss_title: "五岳盟主"
});
this.map = [
    { n: "太室阙", id: "wuyue/songshan/taishi", p: [0, 0], exits: ["north"] },
    { n: "天中阁", id: "wuyue/songshan/tianzhongge", p: [0, 1], exits: ["south", "north"] },
    { n: "中岳大殿", id: "wuyue/songshan/dadian", p: [0, 2], exits: ["south", "northup"] },
    { n: "险峻山道", id: "wuyue/songshan/shandao", p: [0, 3], exits: ["southdown", "northeast"] },
    { n: "铁梁峡", id: "wuyue/songshan/tieliang", p: [1, 4], exits: ["southwest", "northup"] },
    { n: "朝天门", id: "wuyue/songshan/chaotianmen", p: [1, 5], exits: ["southdown", "northup"] },
    { n: "峻极山门", id: "wuyue/songshan/shanmen", p: [1, 6], exits: ["southdown", "northup"] },
    { n: "极顶山道", id: "wuyue/songshan/shandao2", p: [1, 7], exits: ["southdown", "north"] },
    { n: "峻极禅院", id: "wuyue/songshan/chanyuan", p: [1, 8], exits: ["south", "north"] },
    { n: "中门", id: "wuyue/songshan/zhongmen", p: [1, 9], exits: ["south", "north"] },
    { n: "会盟堂", id: "wuyue/songshan/huimengtang", p: [1, 10], exits: ["south", "west", "east"] },
    { n: "西廊", id: "wuyue/songshan/xilang", p: [0, 10], exits: ["east"] },
    { n: "东廊", id: "wuyue/songshan/donglang", p: [2, 10], exits: ["west", "north"] },
    { n: "剑池", id: "wuyue/songshan/jianchi", p: [2, 11], exits: ["south"] },
    { n: "封禅台", id: "wuyue/songshan/fengshantai", p: [0, 8], exits: ["south", "north"] },
    { n: "前庭", id: "wuyue/songshan/qianting", p: [0, 9], exits: ["south", "north"] }
];
this.drops = [
    "book/bc#dasongyangshenzhang",
    "book/bc#songshanjianfa",
    "eq/lv2/wuyuelingqi",
    "eq/lv2/mengzhu_pifeng",
    "book/bc#hanbingzhenqi"
];
