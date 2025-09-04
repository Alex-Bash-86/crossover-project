import { questions } from './modules/questions.js';

const startButton = document.getElementById('start-button');
const questionText = document.getElementById('question-text');
const answerButton = document.getElementById('answer-buttons');
const feedback = document.getElementById('feedback-message');
const scoreDisplay = document.getElementById('score-display');
const highScore = document.getElementById('high-score-display');

let currentIndex = 0;
let score = 0;

function reset() {
  feedback.textContent = '';
  answerButton.innerHTML = '';
}

function showQuestion() {
  reset();
  const q = questions[currentIndex];

  questionText.textContent = q.question;
  q.answers.forEach((el, idx) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = `${el.text}`;
    btn.dataset.correct = el.correct;
    btn.addEventListener('click', onAnswer);
    answerButton.appendChild(btn);
  });
}

function onAnswer(e) {
  const btn = e.currentTarget;
  const correct = btn.dataset.correct === 'true';

  console.log(correct);

  Array.from(answerButton).forEach((el) => {
    const isCorrect = (el.dataset.correct = 'true');
  });

  if (correct) {
    score += 100;
    feedback.textContent = 'Richtig!';
  } else {
    feedback.textContent = 'Falsch';
  }

  scoreDisplay.textContent = score;
  setTimeout(nextQuestions, 5000);
}

function nextQuestions() {
  currentIndex++;

  if (currentIndex >= questions.length) {
    endGame();
  } else {
    showQuestion();
  }
}

function endGame() {}

function startGame() {
  currentIndex = 0;
  score = 0;
  scoreDisplay.textContent = '0';
  startButton.textContent = 'Läuft...';
  showQuestion();
}

startButton.addEventListener('click', startGame);
