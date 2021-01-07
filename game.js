class Game {
	constructor(turnleft = 10) {
		this.turnleft = turnleft;
	};

	createplayers() {
		this.player1 = new Figther();
		this.player2 = new Paladin();
		this.player3 = new Monk();
		this.player4 = new Berzerker();
		this.player5 = new Assassin();
		this.players = Array();
		this.players.push(this.player1,this.player2,this.player3,this.player4,this.player5);
	};

	selecthumanplayer() {
		this.humanplayer = window.prompt("choissisez votre personnage: 1 = figther, 2 = Paladin, 3 = Monk, 4 = Berzerker, 5 = Assasin");
		if(this.humanplayer == 1){
			this.humanplayer = this.player1
			return this.humanplayer
		}
		else if (this.humanplayer == 2) {
			this.humanplayer = this.player2
			return this.humanplayer
		}
		else if (this.humanplayer == 3) {
			this.humanplayer = this.player3
			return this.humanplayer
		}
		else if (this.humanplayer == 4) {
			this.humanplayer = this.player4
			return this.humanplayer
		}
		else if (this.humanplayer == 5) {
			this.humanplayer = this.player5
			return this.humanplayer
		}
		else{
			this.humanplayer = window.prompt("seulement un nombre entre 1 et 5 svp?")
		};
	};

	setennemis(){
		this.ennemis = this.players.filter(player => player.name != this.humanplayer.name);
	};

	selecttarget() {
		this.target = window.prompt("qui voulez vous attaquez? (sauf vous): 1 = figther, 2 = Paladin, 3 = Monk, 4 = Berzerker, 5 = Assasin");
		if(this.target == 1){
			this.target = this.player1
			return this.target
		}
		else if (this.target == 2) {
			this.target = this.player2
			return this.target
		}
		else if (this.target == 3) {
			this.target = this.player3
			return this.target
		}
		else if (this.target == 4) {
			this.target = this.player4
			return this.target
		}
		else if (this.target == 5) {
			this.target = this.player5
			return this.target
		}
		else{
			this.target = window.prompt("seulement un nombre entre 1 et 5 svp")
		};
	};

	showturn() {
		console.log(`il reste ${this.turnleft} tours à jouer`);
	};

	gameover() {
		console.log("GAME OVER!")
	};

	checkwinner(){
	if(this.ennemis.length == this.ennemis.filter(player => player.hp = 0)){
		this.winner();
	}
	};

	nextturn() {
	this.turnleft = this.turnleft - 1
	}

	winner(player) {
		console.log(`${player.name} a gagné!`)
		console.log("la gloire éternelle!!!")
		document.getElementById("win").innerHTML = `${player.name} is the WINNER !!!`;
		alert(`${player.name} a gagné!`)
	};
};

function startgame() {
	const game1 = new Game();
	console.log(game1)
	game1.createplayers();
	alert("selectionnez un joueur");
	game1.selecthumanplayer();
	console.log(`le joueur a choisi ${game1.humanplayer.name}`);
	console.log(game1.humanplayer)
	game1.setennemis();
	console.log("les ennemis sont:")
	console.log(game1.ennemis);
	const turn = new Turn();

	while (game1.turnleft > 0){
		turn.humangameturn(game1);
		turn.ennemisgameturn(game1);
		game1.checkwinner();
		game1.nextturn();
	};
};
