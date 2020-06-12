// Script page

var timerDisplay = document.querySelector("#time");
var startButton = document.querySelector("#startQuiz");
var question1 = document.querySelector("#quest1");
var startMain = document.querySelector("#startMain");
var scoreForm = document.querySelector("#scoreForm");
var score = document.querySelector("#score");
var textAnswer = document.querySelector("#textAnswer");
var saveScore = document.querySelector("#saveScore");
var listScore = document.querySelector("#listScore");
var inputName = document.querySelector("#inlineFormInputName");
var hsBtn = document.querySelector("#hsBtn");


// Div Elements that Quiz details will show the content
var qPlace = document.querySelector("#qPlace");
var ansOne = document.querySelector("#ansOne");
var ansTwo = document.querySelector("#anstwo");
var ansThree = document.querySelector("#ansThree");
var ansFour = document.querySelector("#ansFour");


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
    ansSet: ["Building static websites", "Building websites in Indonesia only", "Building websites that only show text", "Building dynamic websites"],
    correctAns: "Building dynamic websites"
},
{
    Quest: "Q4: What does (var) mean in JavaScript code?",
    ansSet: ["Variable", "Various", "Nothing", "Varcon"],
    correctAns: "Variable"
}];

var i = 0;

function setQuestArray(i) {
    qPlace.textContent = quizSet[i].Quest;
    ansOne.textContent = quizSet[i].ansSet[0];
    ansTwo.textContent = quizSet[i].ansSet[1];
    ansThree.textContent = quizSet[i].ansSet[2];
    ansFour.textContent = quizSet[i].ansSet[3];
};

function startTimer() {
    questOne();
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
            setTimeout(function () { showForm(); }, 1000);
            score.textContent = (" " + timer);
            timerDisplay.textContent = timer;
        }
    }
}

function checkAnswer() {
    if ((i === 0 && event.target === ansTwo) || (i === 1 && event.target === ansThree) || (i === 2 && event.target === ansFour) || (i === 3 && event.target === ansOne)) {
        textAnswer.textContent = "Last Answer was CORRECT!!!";
        textAnswer.style.backgroundColor = "Green";
    }

    else {
        textAnswer.textContent = "Oh no last answer was WRONG!!! (-15 seconds)";
        textAnswer.style.backgroundColor = "red";
        timer = timer - 15;
    }
}

function questOne() {
    question1.style.display = "block";
    startMain.style.display = "none";
}

function showForm() {
    question1.style.display = "none";
    startMain.style.display = "none";
    scoreForm.style.display = "block";
    clearInterval(interval);
    renderScores();
}

function logScore() {
    event.preventDefault();
    var user = {
        userInitials: inputName.value,
        userScore: timer
    };

    if (user.userInitials === "") {
        alert("You need to enter your initals")
        return;
    }
    if ((user.userScore < 1) || (user.userScore === 60)) {
        alert("Your score is ZERO and can't be logged... C'MON!!!")
        inputName.value = "";
        return;
    }
    if ((i < 4)) {
        alert("You did not finish the quiz... Try harder quiter!!!")
        return;
    }
    else {
        localStorage.setItem("user", JSON.stringify(user));
        inputName.value = "";
        timer = 60;
        timerDisplay.textContent = timer;
        score.textContent = 0
        renderScores();
    }
}

function renderScores() {
    var lastUser = JSON.parse(localStorage.getItem("user"));

    if (!lastUser){
        return;
    }
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item list-group-item-action list-group-item-dark");
    li.setAttribute("id", "userList")
    li.textContent = lastUser.userInitials + " your last score was: " + lastUser.userScore;
    listScore.appendChild(li);

    var btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-dark")
    btn.setAttribute("id", "removeBtn")
    btn.textContent = "Remove Score"
    btn.addEventListener("click", removeScore);
    listScore.appendChild(btn)
}

function removeScore() {
    localStorage.removeItem("user");
    var removeBtn = document.querySelector("#removeBtn")
    var userList = document.querySelector("#userList")
    removeBtn.parentNode.removeChild(removeBtn)
    userList.parentNode.removeChild(userList)
}

startButton.addEventListener("click", startTimer);
question1.addEventListener("click", responseClick);
saveScore.addEventListener("click", logScore);
hsBtn.addEventListener("click", showForm);