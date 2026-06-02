this.inherits(AREA);
this.set({
    id: "cd",
    name: "五毒教",
    desc: "自称是五仙教，别人称之为五毒教 驱使蛤蟆、蜘蛛、蝎子、毒蛇、蜈蚣五种毒物战斗，善用毒",
    score: 120,
    is_show: true,
    first: "cd/wudu/damen",
    is_copy: true,
    expend: 10,
    exp: 2100,
    pot: 2100,
    is_multi: true,
    room_path: "cd/wudu/",
    ss_title: "五毒仙子"
});
this.map = [
    { n: "大门", id: "cd/wudu/damen", p: [0, 0], exits: ["east"] },
    { n: "练武场", id: "cd/wudu/lianwu", p: [1, 0], exits: ["west", "south", "east"] },
    { n: "南院", id: "cd/wudu/nanyuan", p: [1, -1], exits: ["north", "west", "south"] },
    { n: "厢房", id: "cd/wudu/xiangfang", p: [0, -1], exits: ["east"] },
    { n: "练毒室", id: "cd/wudu/liandu", p: [1, -2], exits: ["north"] },
    { n: "大厅", id: "cd/wudu/dating", p: [2, 0], exits: ["west", "east"] },
    { n: "花园", id: "cd/wudu/huayuan", p: [3, 0], exits: ["west", "east"] },
    { n: "花厅", id: "cd/wudu/huating", p: [4, 0], exits: ["west", "east"] },
    { n: "腾蛟亭", id: "cd/wudu/huating2", p: [5, 0], exits: ["west", "east"] },
    { n: "后花园", id: "cd/wudu/huayuan2", p: [6, 0], exits: ["west"] },
    { n: "药室", id: "cd/wudu/yaoshi", p: [1, -3], exits: ["north"] }
];
this.drops = [
    "book/bc#wudushengong",
    "book/bc#wuduyanluobu",
    "book/bc#wudugoufa",
    "book/bc#qianzhuwandushou",
    "eq/lv2/wd_shou",
    "eq/lv2/wd_tou",
    "eq/lv2/jinshe_jian_fake"
];
