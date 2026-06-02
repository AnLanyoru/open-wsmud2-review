this.inherits(NPC);
this.set({
    name: "逃犯",
    desc: "他是衙门正在追捕的逃犯",
    title: "<red>衙门逃犯</red>",
    gender: 1,
    age: 25,
    per: 18,
    mp: 400,
    max_mp: 400,
    hp: 400,
    max_hp: 400,
    no_refresh: true,
    no_fight: true

});

this.init_from = function (player, grade = 0, level = 0) {

    const realm = Math.max(0, Math.min(player.level || 0, REALM_HPS.length - 1));
    const yamenLevel = Math.max(0, parseInt(grade) || 0);
    const yamenProgress = Math.max(0, parseInt(level) || 0);
    const skillLevel = 80 + realm * 120 + yamenLevel * 40 + yamenProgress * 5;

    this.con = this.dex = this.int = this.str = 30 + realm * 8 + yamenLevel * 2;
    this.gender = this.random(2) + 1;

    this.desc = (this.gender == 2 ? "她" : "他") + "是" + player.name + "正在追捕的逃犯";

    this.name = UTIL.random_name(this.gender);

    this.skill_map(["force", skillLevel], ["unarmed", skillLevel],
        ["parry", skillLevel], ["dodge", skillLevel]);

    const realmHp = REALM_HPS[realm];
    const playerHp = parseInt((player.max_hp || 0) * (0.75 + realm * 0.05));
    const yamenRate = 1 + yamenLevel * 0.15 + yamenProgress * 0.02;
    this.hp = this.max_hp = parseInt(Math.max(1200, realmHp, playerHp) * yamenRate);
    this.pfm_rate = 1;
    this.mp = this.max_mp = this.max_hp;
    this.init();
    this.recount();

}

const REALM_HPS = [1200, 5000, 15000, 50000, 160000, 450000, 1000000];
