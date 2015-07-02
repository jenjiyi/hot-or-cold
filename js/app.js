
$(document).ready(function(){
	newGame();
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- Restart game ---*/
  	$(".new").click(function(){
  		newGame();
  	});
  	/*--- random integer function (inclusive) ---*/
  	function getSecretNumber(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
  /*--- get difference ---*/
  function diff(x, y) { 
    return Math.abs(x - y) 
  };
  /*--- clear game ---*/
  function clearFields(){
        $('#feedback').empty().html("Make your Guess!");
        $('#validate').html("");
        $('#count').empty();
        $('#guessList').empty();
        $("#userGuess").prop("disabled", false).prop("placeholder", "Enter your Guess");
        $("#guessButton").prop("disabled", false);
          }
  /*--- count guesses ---*/
  function guessCount(){
    $("#count").html(function(i, val) { return val*1+1 });
  }

  /*--- log each guess ---*/
function guessLog(x){
  //print guesses in <li> to ul#guessList 
  $('#guessList').append("<li>"+ x +"</li>");
}
//display guess feedback
function feedback(d){
  if (d >= 50){
    $("#feedback").html("You're ice cold. Guess again.");
  }
  else if (d >= 30 ){
        $("#feedback").html("You're cold. Guess again.");
  }
  else if (d >= 20 ){
        $("#feedback").html("You're warm. Guess again.");
  }
  else  if (d >= 11) {
        $("#feedback").html("You're hot. Guess again.");
  }
  else if (d >= 1) {
        $("#feedback").html("You're very hot. Guess again.");
      }
  else {
    $("#feedback").html("You're right. Congratulations!");
    $("#userGuess").prop("disabled", true).prop("placeholder", "Woohoo!");
    $("#guessButton").prop("disabled", true);
  };
  //$('#feedback').empty().html("Make your Guess!");
  $('#userGuess').val("");
  };

	/*--- start new game ---*/
	function newGame(){
		//clear fields div#feedback, span#count, ul#guessList 
    clearFields();
		// generate secret number between 1-100 inclusive
		secretNumber = getSecretNumber(1, 100);
		console.log(secretNumber);
	};	
 
//getValue of input field #userGuess on button click #guessButton store as guessValue
        $('#guessButton').on('click', function(e){
          e.preventDefault();
          $("#validate").html("");
          var getVal =+ $('#userGuess').val();
           //Checks if the typed value is an integer from 1-100
          if (getVal % 1 != 0 || getVal > 100 || getVal < 1  || isNaN(getVal)){
          //alert('Type only numbers between 1 and 100.');
          $("#validate").html("Guess only numbers between 1 and 100.");
            $('#userGuess').val("");
           }else{           
          $("#validate").html("");
            var difference = diff(getVal, secretNumber);
            console.log(difference);
            feedback(difference);
            guessLog(getVal);
            guessCount();
          }
        }); 		

});