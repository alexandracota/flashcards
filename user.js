var inquirer = require('inquirer');
var fs = require('fs');


//Constructor for each flashcard.
var CreateFlashcard = function (question, answer) {
	this.question = question;
	this.answer = answer;
	//Method for printing the flashcard.
	this.printInfo = function() {
		console.log("Question: " + this.question + "\nAnswer: " + this.answer);
	}
};



//CREATE FLASHCARDS
var promptFlashcard = function(inquire) {
	//Set count to 0.
	var count = 0;
	//Store the function in the variable, Inquire.
	var inquire = function() {
		//If count is less than 10
		if (count < 10) {
			//Prompt the user.
			inquirer.prompt([
				{
					//User enters question.
					type: "input",
					message: "Question for Flascard #" + [i],
					name: "Flashcard" + [i]
				},
				{
					//User enters answer.
					type: "input",
					message: "Answer for Flashcard #" + [i],
					name: "Answer" + [i]
				}
			//Callback function.	
			]).then(function(userInput) {
				//Increase count by 1.
				count++;
				//Add new values to the flashcard constructor.
				var newFlashcard = new CreateFlashcard(userInput.question,userInput.answer);
				//Write flashcard data to log.txt file
				fs.write("log.txt", newFlashcard, function(err){
					if (err) {
						return console.log(err);
					}
					console.log("Your flashcard was saved.");
				});
			})
		} 
	}
};


promptFlashcard();
//RUN FLASHCARDS.


module.exports = promptFlashcard;
module.exports = CreateFlashcard;




