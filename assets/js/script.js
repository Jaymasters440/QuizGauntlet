var timeEl = document.querySelector(".time");
var questionIndex = 0;

var secondsLeft = 90;
// Add event listener to start button element
var startButton = document.querySelector(".button-start");
startButton.addEventListener("click",startTimer);
// Add event listener to button-correct button  to move on to next ? with if else statement to recognize that 
//not a correct answer is an incorrect answer 


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

function checkAnswer(id){
    var currentQuestion = questions[questionIndex];

    var isCorrect = id === currentQuestion.answer;
}

function questionSelector(){
    var currentQuestion = questions[questionIndex];

    var 
}