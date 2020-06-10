// Script page

var timerDisplay = document.querySelector("#time");
var startButton = document.querySelector("#startQuiz");
var question1 = document.querySelector("#quest1")
var startMain = document.querySelector("#startMain")
var scoreForm = document.querySelector("#scoreForm")
var score = document.querySelector("#score")
var textAnswer = document.querySelector("#textAnswer")

// Div Elements that Quiz details will show the content
var qPlace = document.querySelector("#qPlace")
var ansOne = document.querySelector("#ansOne")
var ansTwo = document.querySelector("#anstwo")
var ansThree = document.querySelector("#ansThree")
var ansFour = document.querySelector("#ansFour")


var timer = 60;
var interval;
timerDisplay.textContent = timer;

var quizSet = [{
    Quest: "Q1: Who Invented JavaScript?",
    ansSet: ["Bill Gates", "Brendan Eich", "Steve Jobs", "Elon Musk"],
    correctAns: "Brendan Eich"
},
{
    Quest: "Q2: What year was JavaScript invented?",
    ansSet: ["1983", "2010", "1995", "2001"],
    correctAns: "1995"
},
{
    Quest: "Q3: What is JavaScript used for?",
    ansSet: ["Building static websites", "Building websites in Indonesia only", "Building websites for that only show text", "Building dynamic websites"],
    correctAns: "Building dynamic websites"
},
{
    Quest: "Q4: What does (var) mean in JavaScript code?",
    ansSet: ["Variable", "Various", "Nothing", "Varcon"],
    correctAns: "Variable"
}];


var i = 0
function setQuestArray(i) {
    qPlace.textContent = quizSet[i].Quest;
    ansOne.textContent = quizSet[i].ansSet[0];
    ansTwo.textContent = quizSet[i].ansSet[1];
    ansThree.textContent = quizSet[i].ansSet[2];
    ansFour.textContent = quizSet[i].ansSet[3];
};

function startTimer() {
    questOne()
    setQuestArray(i);
    interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            timerDisplay.textContent = timer;
        }
        else {
            clearInterval(interval);
            alert("YOU HAVE RUN OUT OF TIME!!!");
            showForm();
        }
    }, 1000)
};

function responseClick(event) {
    if (event.target.matches("button")) {
        event.preventDefault();
        checkAnswer();
        i++;
        if (i < quizSet.length) {
            setQuestArray(i)
        }
        else {
            clearInterval(interval);
            setTimeout(function() { showForm(); }, 2000);
            score.textContent = (" " + timer);
            timerDisplay.textContent = timer;
        }
    }
}

function checkAnswer() {
    if (i === 0 && event.target === ansTwo) {
        textAnswer.textContent = "Last Answer was CORRECT!!!";
        textAnswer.style.backgroundColor = "Green";
    }
    else if (i === 1 && event.target === ansThree) {
        textAnswer.textContent = "Last Answer was CORRECT!!!";
        textAnswer.style.backgroundColor = "Green";
    }
    else if (i === 2 && event.target === ansFour) {
        textAnswer.textContent = "Last Answer was CORRECT!!!";
        textAnswer.style.backgroundColor = "Green";
    }
    else if (i === 3 && event.target === ansOne) {
        textAnswer.textContent = "Last Answer was CORRECT!!!";
        textAnswer.style.backgroundColor = "Green";
    }
    else {
        textAnswer.textContent = "Oh no last answer was WRONG!!!";
        textAnswer.style.backgroundColor = "red";
        timer = timer - 10;
    }

}

function questOne() {
    question1.style.display = "block";
    startMain.style.display = "none";
}

function showForm() {
    question1.style.display = "none";
    scoreForm.style.display = "block";
    clearInterval(interval);
}

startButton.addEventListener("click", startTimer);
question1.addEventListener("click", responseClick);