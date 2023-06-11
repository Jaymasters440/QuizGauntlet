var timeEl = document.querySelector("#time");
var buttonBoxEl = document.querySelector(".button-box");
var questionEl = document.querySelector("#question");
var startButton = document.querySelector(".button-start");

var questionIndex = 0;
var secondsLeft = 90;


var questions=[
  "What is HTML?",
  "What is JavaScript?",
  "What is CSS?",
];
var answers=[
  "Answer 1", "Answer 2", "Answer 3",
  "Answer A", "Answer B", "Answer C",
  "answer 1", "answer 2", "answer 3",
];

var correctAnswers=[
  0,1,2
];



// Add event listener to button-wrong to subtract 10 seconds 

function startTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft 
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function at end of quiz to set timer to 0
          
        }
    
      }, 1000);
}
 
function startGame(){
  startTimer();

questionSelector();

}

function checkAnswer(id){
    var currentQuestion = questions[questionIndex];
    console.log(questionIndex);
    var isCorrect = id === correctAnswers[questionIndex];

    if (isCorrect){
      questionIndex++; 
      questionSelector();
    }
}

function questionSelector(){
  
    questionEl.textContent = questions[questionIndex];
    buttonBoxEl.innerHTML = `
    <button id="answer1">${answers[questionIndex*3]}</button>
    <button id="answer2">${answers[questionIndex*3+1]}</button>
    <button id="answer3">${answers[questionIndex*3+2]}</button>
    `
document.querySelector("#answer1").addEventListener("click",checkAnswer(0));
document.querySelector("#answer2").addEventListener("click",checkAnswer(1));
document.querySelector("#answer3").addEventListener("click",checkAnswer(2));

}

startButton.addEventListener("click",startGame);