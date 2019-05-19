define(["model", "view"], function(model, view){
  //Controller coded using a constructor
  function Controller(){
    this.turnPlayer = "";
    this.turn = 0;
    this.playerOneWins = 0;
    this.playerTwoWins = 0;

    this.setPlayerDisplayName = function(player1, player2){
      view.setPlayersName(player1, player2);
    };

    this.addToBoard = function(rowColObj, callback){
       let rowColID = rowColObj.id;
       let turn = this.turn;
       this.turn = parseInt(this.turn, 10) + 1;

       //if parseInt(turn, 10) % 2) == 0 then turn player = 1, else turnPlayer = 2
       (parseInt(turn, 10) % 2) == 0 ? this.turnPlayer = "Player 1" : this.turnPlayer = "Player 2";

       let turnPlayer = this.turnPlayer;
       //Determine which play and update the view with which char to add to the board
       if(turnPlayer === "Player 1"){
         view.addX(rowColID);
         model.setLocation(rowColObj, turnPlayer, callback);
       }
       if(turnPlayer === "Player 2"){
        view.addO(rowColID);
        model.setLocation(rowColObj, turnPlayer, callback);
      }
     };

     this.resetGame = function(turnPlayer){
       alert(`${turnPlayer} has won the game!`);
       const playAgain = confirm("Would you like to play again?");
       turnPlayer === "Player 1" ? this.playerOneWins++:this.playerTwoWins++;
       if(playAgain){
         view.clearCells();
         this.turn = 0;
       } else {
         cells = document.querySelectorAll('td');
         cells.forEach(function(value){
           value.removeEventListener('click', eventsToHandle);
         });
       }
       view.setScore(this.playerOneWins, this.playerTwoWins)
       console.log(`Player 1: ${this.playerOneWins} vs Player 2: ${this.playerTwoWins}`);
     };
    }

  return new Controller();
});
