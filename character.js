class Character {
	constructor (name,hp,dmg,mana) {
		this.name = name;
		this.hp = hp;
		this.dmg = dmg;
		this.mana = mana;
	};

	attack(victim) {
		victim.hp = victim.hp - this.dmg
		if (victim.hp < 0) 
		{
			victim.hp = 0
			console.log(`${victim.name} n'a plus de points de vie`)
		}
		else 
		{
			console.log(`${this.name} a attacqué ${victim.name}, lui a infligé ${this.dmg} points de dégats`)
			console.log(`il reste ${victim.hp} points de vie à ${victim.name}`)
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