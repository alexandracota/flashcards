var FlashcardsAdmin = require("./flashcardsAdmin.js");

//This file will take in the process.argvs
var inputType = process.argv;

var loginType = inputType[2];

var MyAdmin = new FlashcardsAdmin();

if (loginType === "admin") {
	MyAdmin.getData();
} else {
	MyAdmin.flashcards() //Need to pass in params here.
}