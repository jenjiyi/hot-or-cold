
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
  /*--- clear game ---*/
  function clearFields(){
        //clear fields div#feedback, span#count, ul#guessList 
        //$('#feedback').empty();
        $('#count').empty();
        $('#guessList').empty();
          }

	/*--- start new game ---*/
	function newGame(){
		//clear fields div#feedback, span#count, ul#guessList 
    clearFields();
		// generate secret number between 1-100 inclusive
		var secretNumber = getSecretNumber(1, 100);
		console.log(secretNumber);
		//guessVal()
	
		//feedback()
		//guessCount()
		//guessLog()

	}
  		//getValue of input field #userGuess on button click #guessButton store as guessValue
  		  $('#guessButton').on('click', function(e){
  				e.preventDefault();
    			var getVal =+ $('#userGuess').val();
    
   				 //Checks if the typed value is an integer from 1-100
    			if (getVal % 1 != 0 || getVal > 100 || getVal < 1  || isNaN(getVal)){
    	 		alert('Type only numbers between 1 and 100.');
      			$('#userGuess').val("");
     
   				 }else{
            //guessCount();

            //$('#guessList').append("<li>"+getVal+"</li>");

    			
    			guessLog(getVal);
          guessCount();
    			$('#userGuess').val("");
    			}
  			});
  		
//display guess feedback
function feedback(){
	//append to div#feedback
  if (getVal >= secretNumber){}
	// >= 50 "ice cold"
	// 31 - 50 "cold"
	// 21 - 30  "warm"
	// 11- 20 "hot"
	// 1 - 10 "very hot"
  //else "Congratulations! You guessed the right number." 
  }

//count guesses
function guessCount(){
  $("#count").html(function(i, val) { return val*1+1 });
	// span#count default 0
}

//log each guess
function guessLog(x){
	//print guesses in <li> to ul#guessList 
  $('#guessList').append("<li>"+ x +"</li>");
}



 
});

