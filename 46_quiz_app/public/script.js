const quizData = [
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Scripting Sheets",
    b: "Central Style Sheets",
    c: "Counter Strike: Source",
    d: "Cascading Style Sheets",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Machine Language",
    b: "Hyper Tuned Machine Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Tuned Markup Language",
    correct: "c",
  },
  {
    question: "Which Language doesn't have pointers?",
    a: "Go",
    b: "JavaScript",
    c: "C",
    d: "C++",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answersEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2 style="text-align: center; padding: 1rem; margin: 0;">You answered at ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answersEl.forEach(el => (el.checked = false));
}

function getSelected() {
  let answer;

  answersEl.forEach(el => {
    if (el.checked) {
      answer = el.id;
    }
  });

  return answer;
}
