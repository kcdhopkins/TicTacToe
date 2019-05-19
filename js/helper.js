define(["controller"], function(controller){
  var player1 = "Justin";
  var player2 = "Kevin";

    function eventsToHandle(event){
      var eventObj = event.target;
      var eventId = eventObj.id;
      var eEmpty = document.getElementById(eventId).innerHTML;

      //controller methods need to be called from this scope
      const callback = function(turnPlayer){
        controller.resetGame(turnPlayer);
      }
      //tenary operator to see if the element is empty, if it isn't then an alert will be displayed.
      !eEmpty ? controller.addToBoard(eventObj, callback) : alert("Please click on an empty field.");
    }

  var tdList = document.getElementsByTagName('td');
  //Loop through all of the td elements on the page, and add an 'click' event listener to it.
  for (var i = 0; i < tdList.length; i++) {
      //Pass in the targeted element and set a variable to equal the target.
      tdList[i].addEventListener("click", eventsToHandle);
  }
  //call the controller and pass players one and two it.
  controller.setPlayerDisplayName(player1, player2);
});
