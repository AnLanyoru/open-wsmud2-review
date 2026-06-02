this.inherits(AREA);
this.set({
    id: "shenlong",
    name: "神龙教",
    desc: "神龙教盘踞神龙岛，教众善驱毒蛇，行事诡秘。",
    score: 100,
    is_show: true,
    first: "bj/shenlong/haitan",
    is_copy: true,
    expend: 10,
    exp: 1800,
    pot: 1800,
    is_multi: true,
    room_path: "bj/shenlong/",
    ss_title: "神龙教主"
});
this.map = [
    { n: "海滩", id: "bj/shenlong/haitan", p: [0, 0], exits: ["north"] },
    { n: "灌木林", id: "bj/shenlong/lin1", p: [0, 1], exits: ["south", "north"] },
    { n: "灌木林", id: "bj/shenlong/lin2", p: [0, 2], exits: ["south", "north"] },
    { n: "空地", id: "bj/shenlong/kongdi", p: [0, 3], exits: ["south", "north", "east"] },
    { n: "小屋", id: "bj/shenlong/xiaowu", p: [0, 4], exits: ["south"] },
    { n: "大道", id: "bj/shenlong/dadao", p: [1, 3], exits: ["west", "east"] },
    { n: "练武场", id: "bj/shenlong/wuchang", p: [2, 3], exits: ["west", "north"] },
    { n: "大道", id: "bj/shenlong/dadao2", p: [2, 4], exits: ["south", "north"] },
    { n: "大门", id: "bj/shenlong/damen", p: [2, 5], exits: ["south", "north"] },
    { n: "大厅", id: "bj/shenlong/dating", p: [2, 6], exits: ["south"] }
];
this.drops = [
    "book/bc#shenlongxinfa",
    "book/bc#yixingbufa",
    "book/bc#shedaoqigong",
    "book/bc#shenlongjian",
    "book/bc#huagumianzhang",
    "eq/lv2/sl_cloth",
    "eq/lv2/sl_tou",
    "eq/lv2/sl_shoes",
    "eq/lv2/sl_shou",
    "eq/lv2/sl_yao",
    "eq/lv2/sl_ci",
    "eq/lv2/sl_zhang",
    "eq/lv2/sl_ling"
];
