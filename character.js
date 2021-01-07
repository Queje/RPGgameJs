class Character {
	constructor (name,hp,dmg,mana) {
		this.name = name;
		this.hp = hp;
		this.dmg = dmg;
		this.mana = mana;
	};

	attack(victim) {
		victim.hp = victim.hp - this.dmg
		console.log(`${this.name} a attaqué ${victim.name}, lui a infligé ${this.dmg} points de dégats`)
	};

	checkstatusdead() {
		if (this.hp == 0)
        {
			console.log(`Le joueur ${this.name} n'a plus de hp...`)
        }
		else {
			console.log(`${this.name} a ${this.hp} points de vie et ${this.mana} de mana`)
		}
	};
};

class Figther extends Character {
	constructor (name = "Grace", hp = 12, dmg = 4, mana = 40) {
		super(name,hp,dmg,mana);
	};
};

class Paladin extends Character {
	constructor (name = "Ulder", hp = 16, dmg = 3, mana = 160) {
		super(name,hp,dmg,mana);
	};
};

class Monk extends Character {
	constructor (name = "Moana", hp = 8, dmg = 2, mana = 200) {
		super(name,hp,dmg,mana);
	};
};

class Berzerker extends Character {
	constructor (name = "Draven", hp = 8, dmg = 4, mana = 0) {
		super(name,hp,dmg,mana);
	};
};

class Assassin extends Character {
	constructor (name = "Carl", hp = 6, dmg = 6, mana = 20) {
		super(name,hp,dmg,mana);
	};
};