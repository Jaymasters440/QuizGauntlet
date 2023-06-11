var timeEl = document.querySelector("#time");
var buttonBoxEl = document.querySelector(".button-box");
var questionEl = document.querySelector("#question");
var startButton = document.querySelector(".button-start");
var resultsEl = document.querySelector("#results");

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

function checkAnswer(e){
  var givenAnswer=e.target.getAttribute("name")
    var currentQuestion = questions[questionIndex];
    
    var isCorrect = givenAnswer == correctAnswers[questionIndex];
    console.log(givenAnswer+isCorrect);
    if (isCorrect){
      
    }
    questionIndex++; 
      
      if (questionIndex < questions.length){
        questionSelector();
      }
      else {
        endGame();
      }

}

function questionSelector(){
  
  
    questionEl.textContent = questions[questionIndex];
    buttonBoxEl.innerHTML = `
    <button id="answer1" name=0>${answers[questionIndex*3]}</button>
    <button id="answer2" name=1>${answers[questionIndex*3+1]}</button>
    <button id="answer3" name=2>${answers[questionIndex*3+2]}</button>
    `
document.querySelector("#answer1").addEventListener("click",checkAnswer);
document.querySelector("#answer2").addEventListener("click",checkAnswer);
document.querySelector("#answer3").addEventListener("click",checkAnswer);

}

function endGame(){
  var endScore = secondsLeft;
  timeEl.style.visibility="hidden";
  questionEl.textContent = "GAME OVER!";
  buttonBoxEl.innerHTML = ""; 
  resultsEl.innerHTML = `
  <h4>Your score was ${endScore}</h4>
  <p>Enter your initials to save your score! </p>
  <input id="initials"></input>
  <button id="submit">submit</button>

  `
  document.querySelector("#submit").addEventListener("click",()=>{
    localStorage.setItem("scores",endScore)
    window.location.href="highscore.html"
  });


}

function addHighScore(){

}

startButton.addEventListener("click",startGame);