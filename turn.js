class Turn {
   constructor(){};

   gameturn(player1,player2) {
      player1.attack(player2);
      if (player2.checkstatusdead() == true) {
         
         
      }
      else {
         if (player2.hp > 0) {
         player2.attack(player1);
            if (player1.checkstatusdead() == true) {
               
            };
         };
      };
   };
};