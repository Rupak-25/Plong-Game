//Constructor function for the Quiz object
function Quiz(questions) {
	//Initialize score to 0
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

//Method to get the current question

Quiz.prototype.getQuestionIndex = function () {
	//Return the question at the current index
	return this.questions[this.questionIndex];
};

//method to handle a user's guess
Quiz.prototype.guess = function (answer) {
	//check if the given answer is correct
	if (this.getQuestionIndex().isCorrectAnswer(answer)) {
		//increment the score if the answer is correct
		this.score++;
	}
	//move to the next question (advance the question index)
	this.questionIndex++;
};

//method to check if the quiz has ended
Quiz.prototype.isEnded = function () {
	//return true if the current index equals the number of questions, meaning the quiz is cover 
	return this.questionIndex === this.questions.length;
};


//question =============================

//constrctor function for the question object 
function Question(text, choices, answer) {
	//store the question text
	this.text = text;
	//store the array of possible choices
	this.choices = choices;
	//store the correct answer
	this.answer = answer;
}

//method to check if a given chioce is the correct answer
Question.prototype.isCorrectAnswer = function (choice) {
	return this.answer === choice;
};

//app===================================


//function to populate the quiz questions and choices in the UI
function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}

//function to handle when a user clicks a choice button
function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function () {
		quiz.guess(guess);
		populate();
	}
}

//function to update and show the current question number in the UI

function showProgress() {
	//get the current question number (index + 1)
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

//function to display the final score when the quiz ends 
function showScores() {
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHTML;
}

//create an arry of question object 
var questions = [
    new Question(
        "1. What does HTML stand for?",
        [
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
            "Home Tool Markup Language", 
            "None of the above"
        	],
        "Hyper Text Markup Language"
    	),


    new Question(
        "2. What does CSS stand for?",
        [
            "Computer Style Sheets", 
            "Cascading Style Sheets", 
            "Creative Style Sheets", 
            "Colorful Style Sheets"
            ],
        "Cascading Style Sheets"
    ),
    new Question(
        "3. The property in CSS used to change the background color of an element is?",
        [
            "bgcolor", 
            "color", 
            "background-color", 
            "All of the above"
            ],
        "background-color"
    ),
    new Question(
        "4. The property in CSS used to change the text color of an element is?",
        [
            "bgcolor", 
            "color", 
            "background-color", 
            "All of the above"
            ],
        "color"
    ),
    new Question(
        "5. The CSS property used to control the element's font size is?",
        [
            "text-style", 
            "font-style", 
            "text-size", 
            "font-size"
            ],
        "font-size"
    ),
    new Question(
        "6. The HTML attribute used to define inline styles is?",
        [
            "style", 
            "inline", 
            "class", 
            "None of the above"
            ],
        "style"
    ),
    new Question(
        "7. Are negative values allowed in the padding property?",
        [
            "Yes", 
            "No", 
            "It depends on HTML", 
            "None of the above"
            ],
        "No"
    ),
    new Question(
        "8. The CSS property used to specify whether the text is written in horizontal or vertical direction?",
        [
            "word-break", 
            "text-transform", 
            "writing-mode", 
            "text-direction"
            ],
        "writing-mode"
    ),
    new Question(
        "9. Who is making the Web standards?",
        [
            "Mozilla", 
            "Google", 
            "The World Wide Web Consortium", 
            "Microsoft"
            ],
        "The World Wide Web Consortium"
    ),
    new Question(
        "10. The _______ attribute is used to specify the styling of an element, like color, font, size, etc.",
        [
            "src", 
            "alt", 
            "style", 
            "lang"
            ],
        "style"
    )
	];

//create a new quiz object with the array of questions
var quiz = new Quiz(questions);
populate();