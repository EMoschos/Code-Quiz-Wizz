// Script page

var timerDisplay = document.querySelector("#time");

var timer = 5;

startTimer();

function startTimer() {
    var interval = setInterval(function () {
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