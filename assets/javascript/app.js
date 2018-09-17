 
function submitAnswers () {

    
    var total = 7;
    var score = 0;

    var q1 = document.forms["quizF"]["q1"].value;
    var q2 = document.forms["quizF"]["q2"].value;
    var q3 = document.forms["quizF"]["q3"].value;
    var q4 = document.forms["quizF"]["q4"].value;
    var q5 = document.forms["quizF"]["q5"].value;
    var q6 = document.forms["quizF"]["q6"].value;
    var q7 = document.forms["quizF"]["q7"].value;
    
    for (i = 1; i<=total; i++) {

        if(eval("q" + i) === null || eval("q" + i) === "") {
    
    alert("You missed question " + i);
    return false; 
        }
    }
   var answers = ["a", "c", "c", "c", "c", "a", "a"];

   for (i = 1; i <= total; i++) {
    if(eval("q" + i) === answers[i - 1]) {
        score++;

    }

}

alert ("You scored " +score+ " out of " +total);


};

function myFunction() {
    alert("Hello and welcome to Hip Hop Trivia. You have 30 seconds to take the quiz before the timer runs out! Have fun!");
}

var timeLeft = 30;
var elem = document.getElementById("timer");
var score = 0; 

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
   alert("Game is now over!");
   location.reload();
   clear.setInterval;
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }}