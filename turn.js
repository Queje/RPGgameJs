class Turn {
   constructor(){};

   gameturn(player1,player2) 
   {
   player1.attack(player2);
   player2.attack(player1);
   };
};