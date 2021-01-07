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
        }
        else if (this.humanplayer == 2) {
            this.humanplayer = this.player2
        }
        else if (this.humanplayer == 3) {
            this.humanplayer = this.player3
        }
        else if (this.humanplayer == 4) {
            this.humanplayer = this.player4
        }
        else if (this.humanplayer == 5) {
            this.humanplayer = this.player5
        }
        else{
            this.humanplayer = window.prompt("seulement un nombre entre 1 et 5 svp?")
        };
    };

    showturn() {
        console.log(`il reste ${this.turnleft} tours à jouer`);
    };

    gameover() {
        console.log("GAME OVER!")
    };

    winner(player) {
        console.log(`${player.name} a gagné!`)
        console.log("la gloire éternelle!!!")
        document.getElementById("win").innerHTML = `${player.name} is the WINNER !!!`;
        alert(`${player.name} a gagné!`)
     };

    newturn() {
        console.log(`c'est le tour ${this.turnleft}`)
        alert("commencez la baston ?")
        new Turn().gameturn(this.player1, this.player2);

        if (this.player1.hp > 0 && this.player2.hp > 0)
        {
            alert("passez le tour et regardez le status des joueurs?")
            this.turnleft = this.turnleft - 1
            console.log("vous avez passé un tour")
            console.log("")
            console.log(`${this.player1.name} : ${this.player1.hp} hp et ${this.player1.mana} mana`)
            console.log(`${this.player2.name} : ${this.player2.hp} hp et ${this.player2.mana} mana`)
            console.log("")   
        }
        else if (this.player1.hp == 0 || this.player2 == 0) {
            this.gameover();
        }
        else if(this.turnleft != 0) 
        {
            console.log("");
            this.showturn();
            console.log("");
        }
        else 
        {
            console.log("10 tours sont passés... la partie est finie")
            console.log("");
            this.gameover();
            console.log("");
        };
    };
};
