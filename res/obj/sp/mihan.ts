this.inherits(OBJ);
this.set({
    unit: "封",
    name: "蒙古密函",
    desc: "一封密函，火漆封口，似乎写的什么秘密的军事机密",
    value: 0,
    grade: 3
});
this.on_open = function (me) {
    var task = TASK.GET("xiangyang");
    if (!task) return me.notify_fail("你不知道里面写的什么东西。");
    task.on_mihan(10000);
    me.notify("<hic>你把蒙古密函交给襄阳守军，郭大侠开始召集群雄，襄阳守城将在10秒后开始。</hic>");
}
