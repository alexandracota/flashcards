var fs = require("fs");
var User = require("./user.js");

var FlashcardsAdmin = function(getData, flashcards) {
	//Display all data when in admin mode.
	this.getData = function() {
		fs.readFile("log.txt", "utf8", function(error, data) {
			console.log(data);
		});
	};
	/////FINISH THIS CODE/////
	this.flashcards = function(createFlashcard) {
		//Prompt user to fill out flashcards data.
		var createFlashcard = User.promptFlashcard();
	};
};

module.exports = FlashcardsAdmin;