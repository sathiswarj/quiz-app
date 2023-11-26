const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { opt: "javascript", correct: false },
            { opt: "scripting", correct: false },
            { opt: "script", correct: true },
            { opt: "js", correct: false },
        ]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: [
            { opt: "const", correct: true },
            { opt: "var", correct: false },
            { opt: "let", correct: false },
            { opt4: "none of the above", correct: false },
        ]
    },
    {
        question: "What is the use of the noscript tag in Javascript?",
        answers: [
            { opt: "The contents are displayed in non browser", correct: false },
            { opt: "clear all cookies", correct: false },
            { opt: "Both a and b", correct: true },
            { opt: "none of the above", correct: false },
        ]
    },
    {
        question: "Which of the following is a disadvantage of using JavaScript?",
        answers: [
            { opt: "Client-side JavaScript does not allow the reading or writing of files.", correct: false },
            { opt: "Javascript can not be used for Networking applications there are  is no such support available", correct: false },
            { opt: "Javascript doesn't have any multithreading or multiprocess capabilities", correct: false },
            { opt: "All of the above", correct: true },
        ]
    },
    {
        question: "How can you get the type of arguments passed to a function?",
        answers: [
            { opt: "using typeof operator", correct: true },
            { opt: "using getType function", correct: false },
            { opt: "Both of the above", correct: false },
            { opt: "None of the above", correct: false },
        ]
    },
    {
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        answers: [
            { opt: "getIndex()", correct: false },
            { opt: "location", correct: false },
            { opt: "indexOf()", correct: true },
            { opt: "None of the above", correct: false },
        ]
    },
    {
        question: "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?",
        answers: [
            { opt: "anchor()", correct: false },
            { opt: "big()", correct: true },
            { opt: "blink()", correct: false },
            { opt: "italics", correct: false },
        ]
    },
    {
        question: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
        answers: [
            { opt: "push()", correct: false },
            { opt: "pop()", correct: false },
            { opt: "join()", correct: false },
            { opt: "map()", correct: true },
        ]
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        answers: [
            { opt: "reverse()", correct: false },
            { opt: "shift()", correct: false },
            { opt: "slice()", correct: true },
            { opt: "some()", correct: false },
        ]
    },
    {
        question: " Which of the following is a valid type of function javascript supports?",
        answers: [
            { opt: "named function", correct: true },
            { opt: "anonymous function", correct: false },
            { opt: "Both of the above", correct: false },
            { opt: "None of the above", correct: false },
        ]
    },
    {
        question: "Which of the following is used in React.js to increase performance?",
        answers: [
            { opt: "Virtual DOM", correct: true },
            { opt: "Original DOM", correct: false },
            { opt: "Both A and B", correct: false },
            { opt: "None of the above", correct: false },
        ]
    },
    {
        question: "Identify the one which is used to pass data to components from outside",
        answers: [
            { opt: "Render with arguments", correct: false },
            { opt: "setState", correct: false },
            { opt: "Proptypes", correct: false },
            { opt: "Prop", correct: true },
        ]
    },
    {
        question: "Identify the command used to create a react app.",
        answers: [
            { opt: "npm install create-react-app", correct: false },
            { opt: "npx install create-react-app", correct: true },
            { opt: "install -g create-react-app", correct: false },
            { opt: "None of the above", correct: false },
        ]
    },
    {
        question: "In MVC, what does React.js act as?",
        answers: [
            { opt: "Modal", correct: false },
            { opt: "Controller", correct: false },
            { opt: "View", correct: true },
            { opt: "Middleware", correct: false },
        ]
    },
    {
        question: "State whether true or false: React.js covers only the view layer of the app",
        answers: [
            { opt: "False", correct: false },
            { opt: "True", correct: true },
        ]
    },
    {
        question: "Among The following options, choose the one which helps react for keeping their data uni-directional?",
        answers: [
            { opt: "DOM", correct: false },
            { opt: "Flux", correct: true },
            { opt: "Props", correct: false },
            { opt: "None of the above", correct: false },
        ]
    },
    {
        question: "Using which of the following command can prevent default behaviour at in react? ",
        answers: [
            { opt: "preventDefault()", correct: true },
            { opt: "avoidDefault()", correct: false },
            { opt: "revokeDefault()", correct: false },
            { opt: "None of the above", correct: false },
        ]
    },
    {
        question: " Choose the component which should be overridden to stop the component from updating?",
        answers: [
            { opt: "ComponentDidMount", correct: false },
            { opt: "ComponentDidUpdate", correct: false },
            { opt: "WillComponentUpdate", correct: false },
            { opt: "ShallComponentUpdate", correct: true },
        ]
    },
    {
        question: "Choose the correct data flow sequence of flux concept",
        answers: [
            { opt: "Action -> Dispatcher -> Store -> View", correct: true },
            { opt: "Action -> Dispatcher -> View -> Store", correct: false },
            { opt: "Action  -> Store -> View -> Dispatcher", correct: false },
            { opt: " Dispatcher -> Action -> Store -> View", correct: false },
        ]
    },
    {
        question: "State whether true or false: React merges the objects you provide into the current state using setState().",
        answers: [
            { opt: "False", correct: false },
            { opt: "True", correct: true },

        ]
    },

];


const questionsText = document.querySelector('h3.quiz-question');
const optBtn = document.querySelector('.buttons');
const nextBtn = document.querySelector('button.next-btn');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuiz();
}


function showQuiz() {
    nextBtns();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionsText.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let optionBtn = document.createElement('button');
        optionBtn.innerHTML = answer.opt;
        optionBtn.classList.add("btn");
        optBtn.appendChild(optionBtn);
        if (answer.correct) {
            optionBtn.dataset.correct = answer.correct;
        }
        optionBtn.addEventListener('click', selectAns);

    });
}


startQuiz();


//dataset - Dataset property allows to you to get easily set and get the values of custom data attributes that you have on your html

function selectAns(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }

    else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(optBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function nextBtns() {
    nextBtn.style.display = "none";
    while (optBtn.firstChild) {
        optBtn.removeChild(optBtn.firstChild);
    }
}



function nextQue() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuiz();
    }
    else {
        showScore();
    }
}

function showScore() {
    nextBtns();
    questionsText.innerHTML = `your score ${score} / ${questions.length}`;
    if(score >= 15){
        alert("You are Awesome 💥 my friend ");
    }
    else if(score > 10){
        alert("Super my friend 🏆");
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        nextQue();
    }
    else {
        startQuiz();
    }
});