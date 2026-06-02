this.inherits(NPC);
this.set({
    name: "鲁有脚",
    desc: "他是丐帮九袋长老，衣衫褴褛却神情坚毅。",
    title: "丐帮九袋长老",
    gender: 1,
    age: 52,
    per: 22,
    family: FAMILIES.GAIBANG,
    family_level: 3,
    max_mp: 280000,
    max_hp: 280000,
    prop: {
        gj: 4500,
        mz: 4500,
        ds: 4500
    }
});
this.set_objects(["eq/lv0/cloth", 1, 1], ["eq/lv0/mugun", 1, 1]);
this.skill_map(
    ["dodge", 500],
    ["parry", 500],
    ["force", 500],
    ["unarmed", 500],
    ["club", 500],
    ["literate", 500],
    ["gaibangxinfa", 500],
    ["feiyanzoubi", 500, "dodge"],
    ["huntianqigong", 500, "force"],
    ["xiaoyaoyou", 500, "dodge"],
    ["jiaohuabangfa", 500, ["club", "parry"]],
    ["taizuchangquan", 500, "unarmed"]);

this.on_master = function (me) {
    if (me.query_skill("gaibangxinfa", 0) < 100) return me.notify_fail("鲁长老说道：你的丐帮心法掌握程度还不够，需要多加练习。");
    return true;
}
