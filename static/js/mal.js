const questions = [
  {
    question: "What is the primary purpose of a 'div' element in HTML?",
    answers: [
      { text: "To define a division or a section.", correct: true },
      { text: "To create a list.", correct: false },
      { text: "To apply text formatting.", correct: false },
      { text: "To link to an external stylesheet.", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    answers: [
      { text: "Boolean", correct: false },
      { text: "Number", correct: false },
      { text: "Float", correct: true },
      { text: "String", correct: false },
    ],
  },
  {
    question: "In CSS, what does the 'C' stand for in 'CSS'?",
    answers: [
      { text: "Creative", correct: false },
      { text: "Cascading", correct: true },
      { text: "Colorful", correct: false },
      { text: "Computer", correct: false },
    ],
  },
];

const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const questionTextElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const feedbackMessageElement = document.getElementById("feedback-message");
const scoreDisplay = document.getElementById("score-display");
const highScoreDisplay = document.getElementById("high-score-display");
const wizardPrompt = document.getElementById("wizard-prompt");
const wizardAvatar = document.getElementById("wizard-avatar");

// --- 3. Initialize game state variables ---
let currentQuestionIndex = 0;
let score = 0;
let isGameActive = false;
let highScore = localStorage.getItem("highScore") || 0; // Load high score from local storage
highScoreDisplay.textContent = highScore;

function startGame() {
  isGameActive = true;
  startButton.style.display = "none"; // Hide start button
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = score;
  feedbackMessageElement.textContent = "";
  questionContainer.style.display = "block"; // Ensure question container is visible
  wizardPrompt.textContent = "Let's test your knowledge, adventurer!";
  showQuestion();
}

function showQuestion() {
  // Reset state
  answerButtonsElement.innerHTML = "";
  feedbackMessageElement.textContent = "";

  if (currentQuestionIndex < questions.length) {
    let currentQuestion = questions[currentQuestionIndex];
    questionTextElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("answer-btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  } else {
    endGame();
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    score++;
    feedbackMessageElement.textContent = "Correct! ✨";
    selectedButton.classList.add("correct");
    scoreDisplay.textContent = score;
  } else {
    feedbackMessageElement.textContent = "Incorrect. ❌";
    selectedButton.classList.add("incorrect");
  }

  // Disable all buttons after an answer is selected
  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
  });

  // Automatically move to the next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 1500); // 1.5 second delay
}

function endGame() {
  isGameActive = false;
  questionTextElement.textContent = "Quiz complete!";
  answerButtonsElement.innerHTML = "";
  feedbackMessageElement.textContent = `You scored ${score} out of ${questions.length}!`;
  startButton.textContent = "Play Again";
  startButton.style.display = "block";

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    highScoreDisplay.textContent = highScore;
    feedbackMessageElement.textContent += " New high score! 🎉";
  }
}

// --- 4. Event Listeners ---
startButton.addEventListener("click", () => {
  startGame();
});
