define(["view", "controller"], function(view, controller){
//coded the model using classes
  class Model{
    constructor(){
      this.xStraight = ["X","X","X"];
      this.oStraight = ["O","O","O"];
    };

    setLocation(rowColObj, turnPlayer, callback){

      const rowsCols = document.getElementsByTagName('td');
      const topLeft = rowsCols[0].innerHTML;
      const topMiddle = rowsCols[1].innerHTML;
      const topRight = rowsCols[2].innerHTML;
      const middleLeft = rowsCols[3].innerHTML;
      const middleMiddle = rowsCols[4].innerHTML;
      const middleRight = rowsCols[5].innerHTML;
      const bottomLeft = rowsCols[6].innerHTML;
      const bottomMiddle = rowsCols[7].innerHTML;
      const bottomRight = rowsCols[8].innerHTML;

      // straight across to winn
      const topStraight = [topLeft, topMiddle, topRight];
      const middleStraight = [middleLeft, middleMiddle, middleRight];
      const bottomeStraight = [bottomLeft, bottomMiddle, bottomRight];
      //Up and down to win
      const upDownLeft = [topLeft, middleLeft, bottomLeft];
      const upDownMiddle = [topMiddle, middleMiddle, bottomMiddle];
      const upDownRight = [topRight, middleRight, bottomRight];
      //Diagonal Win
      const diagonalRight = [topLeft, middleMiddle, bottomRight];
      const diagonalLeft = [bottomLeft, middleMiddle, topRight];

      if(this.xStraight.toString() === topStraight.toString())
        {
          const cell1 = rowsCols[0].id;
          const cell2 = rowsCols[1].id;
          const cell3 = rowsCols[2].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.xStraight.toString() === middleStraight.toString())
        {
          const cell1 = rowsCols[3].id;
          const cell2 = rowsCols[4].id;
          const cell3 = rowsCols[5].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.xStraight.toString() === bottomeStraight.toString())
        {
          const cell1 = rowsCols[6].id;
          const cell2 = rowsCols[7].id;
          const cell3 = rowsCols[8].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.xStraight.toString() === diagonalRight.toString())
        {
          const cell1 = rowsCols[0].id;
          const cell2 = rowsCols[4].id;
          const cell3 = rowsCols[8].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.xStraight.toString() === diagonalLeft.toString())
        {
          const cell1 = rowsCols[2].id;
          const cell2 = rowsCols[4].id;
          const cell3 = rowsCols[6].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.xStraight.toString() === upDownLeft.toString())
        {
          const cell1 = rowsCols[0].id;
          const cell2 = rowsCols[3].id;
          const cell3 = rowsCols[6].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.xStraight.toString() === upDownMiddle.toString())
        {
          const cell1 = rowsCols[1].id;
          const cell2 = rowsCols[4].id;
          const cell3 = rowsCols[7].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.xStraight.toString() === upDownRight.toString())
        {
          const cell1 = rowsCols[2].id;
          const cell2 = rowsCols[5].id;
          const cell3 = rowsCols[8].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }

  //-----------------------------O's below

      if(this.oStraight.toString() === topStraight.toString())
        {
          const cell1 = rowsCols[0].id;
          const cell2 = rowsCols[1].id;
          const cell3 = rowsCols[2].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.oStraight.toString() === middleStraight.toString())
        {
          const cell1 = rowsCols[3].id;
          const cell2 = rowsCols[4].id;
          const cell3 = rowsCols[5].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.oStraight.toString() === bottomeStraight.toString())
        {
          const cell1 = rowsCols[6].id;
          const cell2 = rowsCols[7].id;
          const cell3 = rowsCols[8].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.oStraight.toString() === diagonalRight.toString())
        {
          const cell1 = rowsCols[0].id;
          const cell2 = rowsCols[4].id;
          const cell3 = rowsCols[8].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.oStraight.toString() === diagonalLeft.toString())
        {
          const cell1 = rowsCols[2].id;
          const cell2 = rowsCols[4].id;
          const cell3 = rowsCols[6].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.oStraight.toString() === upDownLeft.toString())
        {
          const cell1 = rowsCols[0].id;
          const cell2 = rowsCols[3].id;
          const cell3 = rowsCols[6].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.oStraight.toString() === upDownMiddle.toString())
        {
          const cell1 = rowsCols[1].id;
          const cell2 = rowsCols[4].id;
          const cell3 = rowsCols[7].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
        if(this.oStraight.toString() === upDownRight.toString())
        {
          const cell1 = rowsCols[2].id;
          const cell2 = rowsCols[5].id;
          const cell3 = rowsCols[8].id;
          const cellsToColor = [cell1, cell2, cell3];
          view.winner(turnPlayer, cellsToColor, callback);
        }
    }
  }

  return new Model();
});
