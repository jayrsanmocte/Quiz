
const questions = [
{
    question: "MS-Word is an example of _____",
    answers: [
        { text: "Application software", correct: true},
        { text: "An operating system", correct: false},
        { text: "A processing device", correct: false},
        { text: "An input device", correct: false},
    ]
},
{
    question: "Ctrl, Shift and Alt are called .......... keys.",
    answers: [
        {text: "alphanumeric",correct: false},
        {text: "function",correct: false},
        {text: "adjustment",correct: false},
        {text: "modifier",correct: true},
    ]
},
{
    question: "A computer cannot boot if it does not have the _____",
    answers: [
        {text: "Loader",correct: false},
        {text: "Operating system",correct: true},
        {text: "Compiler",correct: false},
        {text: "Assembler",correct: false},
    ] 
},
{
    question: "_______ is the process of dividing the disk into tracks and",
    answers: [
        {text: " Crashing",correct: false},
        {text: " Tracking",correct: false},
        {text: "Formatting",correct: true},
        {text: "Allotting",correct: false},
    ] 
}

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innterHTML = "Next";
    showQuestion();
}
function showQuestion() {
    reset()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function reset(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");

        }
        button.disable = true;
    } );
    nextButton.style.display= "block";
}
function showScore (){
    reset();
    questionElement.innerHTML= `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    showQuestion();
    else {
        showScore();
    }
}
nextButton.addEventListener("click", ()=>  
{
    if (currentQuestionIndex < questions.length)
    handleNextbutton() ;
    else {
        startQuiz();
    }
}
)
startQuiz();
