
$(document).ready(function(){
	newGame();
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
  	/*--- random integer function ---*/
  	function getSecretNumber(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/*--- start new game ---*/
	function newGame(){
		//clear fields div#feedback, span#count, ul#guessList 

		// generate secret number between 1-100 inclusive
		var secretNumber = getSecretNumber(1, 100);
		console.log(secretNumber);
		//guessVal()
		//validate()
		//feedback()
		//guessCount()
		//guessLog()

	}

  		
  		//getValue of input field #userGuess on button click #guessButton store as guessValue
  		//input validation 
		//ensures that the user has supplied a numeric input between 1 and 100

//feedback()
	//append to div#feedback
	// >= 50 "ice cold"
	// 31 - 50 "cold"
	// 21 - 30  "warm"
	// 11- 20 "hot"
	// 1 - 10 "very hot"

//guessCount()
	// span#count default 0

//guessLog()
	//print guesses in <li> to ul#guessList 


});


