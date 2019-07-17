$(document).ready(function(){
    alert("Music is coming up");
   // document.getElementById("friends").play();
$(".start-button").on("click", function(event){
    event.preventDefault();
    generateQuestion();
    timeCounter();
    $(this).hide();
});
$("body").on("click", ".answer", function(event){
    selectedAnswer = $(this).text();
   console.log(selectedAnswer)
    if (selectedAnswer == correctAnswer[indexNumber]) {
        clearInterval(clock);
        win();
    } else {
        clearInterval(clock);
        lose();
    }
});
$(".reset-button").on("click", function(event){
    resetGame();
});
});
function outOfTime(){
    unanswered++;
    newHTML = "<div class='text-center timer-pause'> Time Remaining: <span class='timer'>" + counter + "</span></div>" + "<div class='text-center'>You ran out of time! The correct answer was: " + correctAnswer[indexNumber] + "</div>";
    $(".mainArea").html(newHTML);
    setTimeout(wait, 2000);
}

function win(){
    correctAnswers++;
    newHTML = "<div class='text-center timer-pause'> Time Remaining: <span class='timer'>" + counter + "</span></div>" + "<div class='text-center'><h2>You are right! The correct answer is: " + correctAnswer[indexNumber] + imagesArray[indexNumber];
    $(".mainArea").html(newHTML);
    setTimeout(wait, 4000);
}

function lose(){
    wrongAnswers++;
    newHTML = "<div class='text-center timer-pause'> Time Remaining: <span class='timer'>" + counter + "</span></div>" + "<div class='text-center'>Wrong! The correct answer was: " + correctAnswer[indexNumber] + "<h2></div>";
    $(".mainArea").html(newHTML);
    setTimeout(wait, 4000);
}


function generateQuestion(){
    newHTML = "<div class='text-center timer-pause'>Time Remaining: <span class='timer'>30</span></div><div class='text-center'>" + questionArray[indexNumber] + "</div><div class='answer' id='first-answer'>" + answerArray[indexNumber][0] + "</div><div class='answer'>" + answerArray[indexNumber][1] + "</div><div class='answer'>" + answerArray[indexNumber][2] + "</div><div class='answer'>" + answerArray[indexNumber][3] + "</div>";
    $(".mainArea").html(newHTML);
}
function wait() {
    if (indexNumber <= 4) {
        indexNumber++;
        generateQuestion();
        timeCounter();

    } 
    else {
        gameOver();
    }
}

function timeCounter(){
    clock = setInterval(ticking, 1000);
    function ticking(){
        if (counter === 0) {
            clearInterval(clock);
            outOfTime();
        } else if (counter>0) {
            counter--;
        }
        $(".timer").html(counter);
    }

}

function gameOver() {
    newHTML = "<div class='text-center timer-pause'>Time Remaining:<span class='timer'>" + counter + "</span></div>" + "<div class='text-center'> All done, here's your final scores!" + "</div>" + "<div class='correctSum'>Correct Answers: " + correctAnswers + "</div>" + "<div>Wrong Answers: " + wrongAnswers + "</div>" + "<div>Unanswered: " + unanswered + "<div class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>!Start Over!</a></div>";
    $(".mainArea").html(newHTML);
}

function resetGame(){
    indexNumber = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;
    counter = 30;
    generateQuestion();
    timeCounter();
}
var newHTML;
var counter = 30;
    var questionArray = ["Which store did Rachel and Ross both buy the same apothecary table from?", "Monica’s apartment number was originally 5. What number was it later changed to for the rest of the series?", "In 'The One Where No Ones Ready,' what does Phoebe spill on her dress?", "Who said it? From now on, the only person who's going to enjoy these bad boys is me.", "How long is the letter Rachel writes Ross at the beach house?"];
    var answerArray = [["Crate & Barrel", "West Elm", "Pottery Barn", "Anthropologie"], ["10", "15", "6", "20"], ["Wine", "Hummus", "Diet Coke", "Guacamole"], ["Rachel", "Monica", "Joye", "Ross"], ["10 pages, front and back", "9 pages, front and back", "18 pages, front and back", "15 pages, front and back"]];
    var correctAnswer = ["Pottery Barn", "20", "Hummus", "Ross", "18 pages, front and back"];
    var imagesArray = ["<img class='center-block img-right' src='assets/images/PotteryBarn.jpg'>", "<img class='center-block img-right' src='assets/images/20.jpg'>", "<img class='center-block img-right' src='assets/images/Hummus.gif'>", "<img class='center-block img-right' src='assets/images/Ross.gif'>", "<img class='center-block img-right' src='assets/images/BackAndFront.gif'>",]
    var indexNumber = 0;
    var selecterAnswer;
    var clock;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
