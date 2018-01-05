//define functions here
function getIt(){
  $('p').on("click", alert("Hey!"));
}
function frameIt(){
    $('img').bind("load", function(){
      $('img').addClass('tasty');
    });
  
}
function pressIt(){
  $('input').keydown(function(event){
    if(event.keyCode == 71){
      alert("You have pressed the letter G.");
    }
  })
}
function submitIt(){
  $('#submit').submit(function(event){
    alert('Your form is going to be submitted now.');
  })
}
$(document).ready(function(){

// call functions here
event.pressIt();
});
