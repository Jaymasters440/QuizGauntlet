function displayScores(){
    var scores = JSON.parse(localStorage.getItem("scores"));
    var initials = JSON.parse(localStorage.getItem("initials"));

    var scoresEl = document.querySelector("#scores");

    for(var i = 0; i<scores.length; i++){
        scoresEl.innerHTML+=`
        <div><h4>${initials[i]}:${scores[i]}</h4></div>
        `
    }
}; 
displayScores()