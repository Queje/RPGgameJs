class Turn {
	constructor(){};

	humangameturn(game1) {
		console.log(`il reste ${game1.turnleft} tours`)
		alert("commencez la baston ?")
		const target = game1.selecttarget();
		game1.humanplayer.attack(target)
		target.checkstatusdead();
	};

	ennemisgameturn(game1) {
		alert("c'est aux ennemis de jouer!")
		const ennemisfighting = game1.ennemis.sort(() => Math.random() - 0.5);
		console.log(game1.players);
		ennemisfighting[0].attack(game1.players[Math.floor(Math.random()*5)]);
		ennemisfighting[1].attack(game1.players[Math.floor(Math.random()*5)]);
		ennemisfighting[2].attack(game1.players[Math.floor(Math.random()*5)]);
		ennemisfighting[3].attack(game1.players[Math.floor(Math.random()*5)]);
		
		ennemisfighting.forEach(player => { 
			player.checkstatusdead();
		});
		alert("voulez vous lancer un nouveau tour?")
	};
};