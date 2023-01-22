var timeEl = document.querySelector(".time");


var secondsLeft = 90;

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

startTimer()