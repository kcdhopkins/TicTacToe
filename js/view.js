define(["controller"], function(controller){
//View coded using prototypes
    function View(){

    }

    View.prototype.setPlayersName = function(player1, player2){
          const firstPlayer = document.getElementById('playerOne');
          const secondPlayer = document.getElementById('playerTwo');
          firstPlayer.innerHTML = player1;
          secondPlayer.innerHTML = player2;
     };

    View.prototype.setScore = function(score1, score2){
      const playerOne = document.getElementById('playerOneScore');
      const playerTwo = document.getElementById('playerTwoScore');
      playerOne.innerHTML = score1;
      playerTwo.innerHTML = score2;
    };

    View.prototype.addX = function(rowColID){
      const rowCol = document.getElementById(rowColID);
      //rowCol.innerHTML = "<i class='fab fa-xing'></i>";
      rowCol.innerHTML = "X";
    };

    View.prototype.addO = function(rowColID){
      const rowCol = document.getElementById(rowColID);
      //rowCol.innerHTML = "<i class='fab fa-jedi-order'></i>";
      rowCol.innerHTML ="O";
    };

    View.prototype.winner = function(turnPlayer, cells, callback){
        const promiseToFinishCellWork = new Promise(resolve =>{
          for (let i = 0; i < cells.length; i++) {
            document.getElementById(cells[i]).style.color = "White";
            document.getElementById(cells[i]).style.backgroundColor = "red";
          }

          setInterval(function(){
              clearInterval();
              resolve();
          }, 100);
        });

        promiseToFinishCellWork.then(function(){
          callback(turnPlayer);
        });
     };

   View.prototype.clearCells = function(){
      const tdListToClear = document.getElementsByTagName('td');
      for (let i = 0; i < tdListToClear.length; i++) {
        tdListToClear[i].innerHTML = "";
        tdListToClear[i].style.color = "";
        tdListToClear[i].style.backgroundColor = "";
      }
    };

    return new View();
});
