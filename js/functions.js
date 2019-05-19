require(function(){
  var changeThese = backgroundChange();
  setInterval(changeThese, 5000);

  //Used closure to maintain the free variable count to loop through the images and reset after four images have been displayed
  function backgroundChange(){
    var count = 0;
    function changeImage(){

        if(count < 4){
          document.body.style.backgroundImage = "url('img/bg"+count+".jpeg')";
          count++;
        }
        else {
          document.body.style.backgroundImage = "url('img/bg"+count+".jpeg')";
          count = 0;
        }
      }
    return changeImage;
  }
});
