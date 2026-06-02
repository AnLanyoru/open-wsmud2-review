this.inherits(AREA);
this.set({
    id: "guanwai",
    name: "关外",
    desc: "关外风雪险恶，胡家旧事与闯王宝藏的线索都藏在这片雪原里。",
    score: 100,
    is_show: true,
    first: "bj/guanwai/damen",
    is_copy: true,
    expend: 10,
    exp: 1900,
    pot: 1900,
    is_multi: false,
    room_path: "bj/guanwai/",
    ss_title: "雪山飞狐"
});
this.map = [
    { n: "大门坎子", id: "bj/guanwai/damen", p: [0, 0], exits: ["northeast", "west"] },
    { n: "二门坎子", id: "bj/guanwai/ermenkanzi", p: [1, 1], exits: ["southwest", "east"] },
    { n: "满天星", id: "bj/guanwai/mantianxing", p: [2, 1], exits: ["west", "southeast"] },
    { n: "谷草跺", id: "bj/guanwai/gucaoduo", p: [3, 0], exits: ["northwest", "east"] },
    { n: "白河", id: "bj/guanwai/baihe", p: [4, 0], exits: ["west", "north", "east"] },
    { n: "小茅屋", id: "bj/guanwai/xiaomaowu", p: [4, 1], exits: ["south"] },
    { n: "密林", id: "bj/guanwai/milin1", p: [5, 0], exits: ["west", "eastup"] },
    { n: "密林", id: "bj/guanwai/milin2", p: [6, 1], exits: ["westdown", "southup"] },
    { n: "密林", id: "bj/guanwai/milin3", p: [7, 0], exits: ["northdown", "eastup"] },
    { n: "黑风口", id: "bj/guanwai/heifengkou", p: [8, 1], exits: ["westdown", "east"] },
    { n: "小天池", id: "bj/guanwai/xiaotianchi", p: [9, 1], exits: ["west", "east"] },
    { n: "松花江面", id: "bj/guanwai/duchuan", p: [-1, 0], exits: ["east", "west"] },
    { n: "船厂", id: "bj/guanwai/jiang", p: [-2, 0], exits: ["south"] },
    { n: "雪地", id: "bj/guanwai/xuedi1", p: [-3, -1], exits: ["north", "east", "south", "west"] },
    { n: "雪地", id: "bj/guanwai/xuedi2", p: [-3, -2], exits: ["south", "north"] },
    { n: "雪地", id: "bj/guanwai/xuedi3", p: [-2, -1], exits: ["west"] },
    { n: "雪地", id: "bj/guanwai/xuedi4", p: [-3, 0], exits: ["north"] },
    { n: "雪地", id: "bj/guanwai/xuedi5", p: [-4, -1], exits: ["east"] },
    { n: "荒路", id: "bj/guanwai/huanglu", p: [-3, -3], exits: ["south", "north"] },
    { n: "山神庙", id: "bj/guanwai/shanshenmiao", p: [-3, -4], exits: ["south"] },
    { n: "瀑布", id: "bj/guanwai/pubu", p: [10, 1], exits: ["west", "north"] },
    { n: "龙脉", id: "bj/guanwai/longmai", p: [10, 2], exits: ["south"] }
];
this.drops = [
    "book/bc#lengyueshengong",
    "drug/xiongdan",
    "book/bc#hujiadaofa",
    "book/bc#sixiangbu",
    "eq/lv2/cw_baodao"
];
