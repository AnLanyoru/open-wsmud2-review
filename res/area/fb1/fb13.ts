this.inherits(AREA);
this.set({
    id: "wuyue",
    name: "恒山",
    desc: "北岳恒山，也是五岳剑派恒山派的所在地",
    score: 100,
    is_show: true,
    first: "wuyue/hengshan/daziling",
    is_copy: true,
    expend: 10,
    exp: 2200,
    pot: 2200,
    is_multi: false,
    room_path: "wuyue/hengshan/",
    ss_title: "恒山三定"
});
this.map = [
    { n: "大字岭", id: "wuyue/hengshan/daziling", p: [0, 0], exits: ["northup"] },
    { n: "虎风口", id: "wuyue/hengshan/hufengkou", p: [0, 1], exits: ["southdown", "northwest"] },
    { n: "果老岭", id: "wuyue/hengshan/guolaoling", p: [-1, 2], exits: ["southeast", "northwest"] },
    { n: "通元谷", id: "wuyue/hengshan/tongyuangu", p: [-2, 3], exits: ["southeast", "northup"] },
    { n: "山道", id: "wuyue/hengshan/shandao", p: [-2, 4], exits: ["southdown", "northup", "east"] },
    { n: "见性峰", id: "wuyue/hengshan/jianxingfeng", p: [-2, 5], exits: ["southdown", "north"] },
    { n: "白云庵", id: "wuyue/hengshan/baiyunan", p: [-2, 6], exits: ["south", "north", "west", "east"] },
    { n: "白云庵后殿", id: "wuyue/hengshan/houdian", p: [-2, 7], exits: ["south"] },
    { n: "西廊", id: "wuyue/hengshan/xilang", p: [-3, 6], exits: ["east", "north"] },
    { n: "斋堂", id: "wuyue/hengshan/zaitang", p: [-3, 7], exits: ["south", "east", "north"] },
    { n: "东廊", id: "wuyue/hengshan/donglang", p: [-1, 6], exits: ["west", "north"] },
    { n: "练功房", id: "wuyue/hengshan/liangongfang", p: [-1, 7], exits: ["south"] },
    { n: "北岳殿", id: "wuyue/hengshan/beiyuedian", p: [-1, 5], exits: ["west", "north"] }
];
this.drops = [
    "eq/lv2/kuangfengdao",
    "eq/lv2/tbg_mianzhao",
    "book/bc#kuangfengkuaidao",
    "book/bc#baiyunxinfa",
    "book/bc#hengshanshenfa",
    "book/bc#hengshanjianfa",
    "book/bc#tianchangzhang"
];
