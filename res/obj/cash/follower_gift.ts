this.inherits(OBJ);
this.set({
    name: "随从礼包",
    desc: "里面有随从契约，少量扫荡符、天师符。注：有几率开出你已经拥有的随从，相同随从不能同时存在。",
    unit: "个",
    value: 0,
    grade: 5,
    transable: true
});

var FOLLOWER_KEYS = [
    "wang", "shuang", "zhou", "cheng", "xiaozhao", "zhang", "xia", "wen",
    "huang", "azi", "long", "qing", "lang", "shimei"
];

this.on_open = function (me) {
    return OBJ.create_by_odds([
        { obj: "sp/npc#" + FOLLOWER_KEYS.random() },
        { obj: "cash/saodang", min: 3, max: 8 },
        { obj: "cash/tianshifu", min: 1, max: 3 }
    ]);
};
