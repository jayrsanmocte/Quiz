
const questions = [
{
    question: "pinaka pogi sa gc??",
    answers: [
        { text: "jayr", correct: true},
        { text: "boy swimming", correct: false},
        { text: "neo", correct: false},
        { text: "boss g", correct: false},
    ]
},
{
    question: "may pilot sa ml",
    answers: [
        {text: "boy swimming",correct: false},
        {text: "boss g",correct: false},
        {text: "neo",correct: false},
        {text: "ji ar",correct: true},
    ]
},
{
    question: "mamaw mag vale",
    answers: [
        {text: "neo",correct: false},
        {text: "ji ar",correct: true},
        {text: "boss g",correct: false},
        {text: "boy swimming",correct: false},
    ] 
},
{
    question: "mahilig may layla",
    answers: [
        {text: "boss g",correct: false},
        {text: "ji ar",correct: false},
        {text: "neo",correct: true},
        {text: "boy swimming",correct: false},
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
