var letter = require('./letter.js');
var Word = function(tvShow) {
	this.tvShowTitle = tvShow;
	this.guesses = [];
	this.correctGuess = false;
	this.userGuesses = function(tvShowTitle) {
		for (var i = 0; i < this.tvShowTitle.length; i++) {
			this.guesses.push(new letter.Letter(this.tvShowTitle[i]));
		}
	};
	this.userGuessTvShow = function() {
		var guessCount = 0;
		for (var i = 0; i < this.guesses.length; i++) {
			if (this.guesses[i].display) {
				guessCount++;
			}
		}
		if (guessCount === this.guesses.length) {
			this.correctGuess = true;
		}
		return this.correctGuess;
	};
	this.userGuessCorrectLetter = function(guessLetter) {
		var returnUserGuess = 0;
		for (var i = 0; i < this.guesses.length; i++) {
			if (this.guesses[i].popularTvShowTitle === guessLetter) {
				this.guesses[i].display = true;
				returnUserGuess++;
			}
		}
		return returnUserGuess;
	};
	this.tvShowTitleGiven = function() {
		var space = "";
		for (var i = 0; i < this.guesses.length; i++) {
			space += this.guesses[i].letterRender();
		}
		return space;
	};
};

exports.Word = Word;