var prompt = require('prompt');
var Word = require('./word.js');
var Game = require('./game.js');

prompt.start();

game = {
	wordBank : Game.wordBank,
	guessedLetters: [],
	lettersGuessedCorrectly : 0,
	displayCorrectLetters : null,
	guessesRemaining : 10,
	startGame : function(tvShow) {
		this.resetGuessesRemaining();
		this.displayCorrectLetters = new Word.Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
		this.displayCorrectLetters.userGuesses();
		console.log("Do you think you know TV shows?\nGuess the title of a popular TV show.");
		console.log(this.displayCorrectLetters.tvShowTitleGiven() + '\n');
		this.promptUser();
	},
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	promptUser : function(){
		var self = this;
		prompt.get(['guessLetter'], function(err, result) {
				console.log("");
		    console.log('The letter you guessed is: ' + result.guessLetter);

		    var numberOfUserGuesses = self.displayCorrectLetters.userGuessCorrectLetter(result.guessLetter);

		    if (numberOfUserGuesses === 0) {
					if (self.guessedLetters.indexOf(result.guessLetter) < 0) {
            	self.guessedLetters.push(result.guessLetter);
            	self.guessesRemaining--;
            	console.log("That was wrong...");
          } else {
            	console.log("Do you not remember? You just entered that.");
          }
		    } else {
			    	if (self.guessedLetters.indexOf(result.guessLetter) < 0) {
	    				self.guessedLetters.push(result.guessLetter);
				    	console.log("That was right.");
				    } else {
				    	console.log('Again? You already guessed that letter.');
				    }
		    		if (self.displayCorrectLetters.userGuessTvShow()) {
				    	console.log('You watch to much TV. You knew the TV show ' + self.displayCorrectLetters.tvShowTitle);
				    	return;
				    }
			    }

		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.displayCorrectLetters.tvShowTitleGiven());
				console.log("");
		    console.log('Letters already guessed: ' + self.guessedLetters);


		    if ((self.guessesRemaining > 0) && (self.displayCorrectLetters.correctGuess === false)){
		    	self.promptUser();
		    } else if(self.guessesRemaining === 0){
			    	console.log("Good, you don't watch a lot of TV. Save those brain cells.\nThe answer was ", self.displayCorrectLetters.tvShowTitle);
			  } else{
			    	console.log(self.displayCorrectLetters.tvShowTitleGiven());
			  }
		});
	}
};

game.startGame();