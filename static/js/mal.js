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

// --- 3. Initialize game state variables ---
let currentQuestionIndex = 0;
let score = 0;
let isGameActive = false;

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
}

function selectAnswer(e) {
  // Automatically move to the next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 1500); // 1.5 second delay
}

function endGame() {}

// --- 4. Event Listeners ---
startButton.addEventListener("click", () => {
  startGame();
});
