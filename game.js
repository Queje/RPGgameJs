class Game {
    constructor(turnleft = 10) {
        this.turnleft = turnleft;
    };

    startgame() {
    this.player1 = new Figther ();
    this.player2 = new Paladin ();
    };

    showturn() {
        console.log(`il reste ${this.turnleft} tours à jouer`);
    };

    gameover() {
        console.log("GAME OVER!")
    };

    newturn() {
        console.log(`c'est le tour ${this.turnleft}`)
        alert("commencez la baston ?")
        new Turn().gameturn(this.player1,this.player2);

        alert("passez le tour et regardez le status des joueurs?")
        this.turnleft = this.turnleft - 1
        console.log("vous avez passé un tour")
        console.log(`${this.player1.name} : ${this.player1.hp}`)
        console.log(`${this.player2.name} : ${this.player2.hp}`)

        if (this.player1.hp == 0)
        {
            console.log(`Le joueur ${this.player1.name} n'a plus de hp...`)
            this.gameover();
        }
        else if(this.player2.hp == 0) 
        {
            console.log(`Le joueur ${this.player1.name} n'a plus de hp...`)
            this.gameover();
        }
        else if(this.turnleft != 0) 
        {
            this.showturn();
        }
        else 
        {
            console.log("10 tours sont passés... la partie est finie")
            this.gameover();
        };
    };
};