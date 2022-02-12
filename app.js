const quizData = [
    {
        question: `Quale è il mio cibo preferito?`,
        a: `Pizza`,
        b: `Pasta`,
        c: `Pierogi`,
        d: `Tofu`,
        correct: `c`,
    },

    {
        question: `Quanti anni ho?`,
        a: `25`,
        b: `40`,
        c: `31`,
        d: `110`,
        correct: `c`,
        
    },

    {
        question: `Quale colore mi piace di più?`,
        a: `Giallo`,
        b: `Arancione`,
        c: `Blu`,
        d: `Verde`,
        correct: `c`,
    },

    {
        question: `Quale è il mio habitat?`,
        a: `Mare`,
        b: `Montagna`,
        c: `Marte`,
        d: `Mongolia`,
        correct: `a`,
    },
    
    {
        question: `Dove ho conosciuto il mio primo e unico amore?`,
        a: `Minnesota`,
        b: `Moai Beach`,
        c: `Frigorifero`,
        d: `Groenlandia`,
        correct: `b`,
    },

];

const questionEl = document.querySelector('#question');
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector('#submitBtn');
const answersEls = document.querySelectorAll('.answer');
const quiz = document.querySelector('#quiz');


let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){

    let answer = undefined;

    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        } 
    });
    
    return answer;
    
}

function deselectAnswers(){
    answersEls.forEach((answerEl) =>{
       answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
       
        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `<h5>Il tuo punteggio è ${score} su ${quizData.length} .</h5>`;
        }
    }
})