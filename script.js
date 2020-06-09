// Script page

var timerDisplay = document.querySelector("#time");
var startButton = document.querySelector("#startQuiz");
var question1 = document.querySelector("#quest1")
var question2 = document.querySelector("#quest2")
var startMain = document.querySelector("#startMain")
var q1Button = document.querySelector("#quest2btn")

var timer = 60;
var interval;
timerDisplay.textContent = timer;

function startTimer() {
    questOne();
    interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            timerDisplay.textContent = timer;
        }
        else {
            clearInterval(interval);
            alert("YOU HAVE RUN OUT OF TIME!!!")
        }
    }, 1000)
};

function questOne() {
question1.style.display = "block";
startMain.style.display = "none";
}

function questtwo() {
    question1.style.display = "none";
    question2.style.display = "block";
    clearInterval(interval);
    }

startButton.addEventListener("click", startTimer);
//startButton.addEventListener("click", questOne);
q1Button.addEventListener("click", questtwo);