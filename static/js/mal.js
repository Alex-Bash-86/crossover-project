// importing questions
import { questions } from "./questions-mal.js";

// declaring DOM elements

const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const questionTextElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const feedbackMessageElement = document.getElementById("feedback-message");
const scoreDisplay = document.getElementById("score-display");
const highScoreDisplay = document.getElementById("high-score-display");
const wizardPrompt = document.getElementById("wizard-prompt");
const wizardAvatar = document.getElementById("wizard-avatar");
const tuxContainer = document.getElementById("tux-avatar-container");
const healthBarFill = document.getElementById("health-bar-fill");
const healthBarContainer = document.getElementById("health-bar-container");
const wpContainer = document.getElementById("game-container");

// RND BG SWITCHER (yeah, really for both classes!) /*edited: not working as intended... YET!*/
document.addEventListener("DOMContentLoaded", function () {
  // Check if the container element exists
  if (!wpContainer) {
    console.error(
      "Error: Container element not found. Please check your HTML selector."
    );
    return; // Exit the function if the element is not found
  }

  const loadWP = () => {
    const wpArray = [
      "/static/img/worlds/world-1.png",
      "/static/img/worlds/world-2.png",
      "/static/img/worlds/world-3.png",
      "/static/img/worlds/world-4.png",
    ];

    const selectedWP = wpArray[Math.floor(Math.random() * wpArray.length)];
    const img = new Image();
    img.src = selectedWP;

    img.onerror = () => {
      console.error(`Error loading image: ${selectedWP}`);
    };

    img.onload = () => {
      wpContainer.style.setProperty("background-image", `url('${selectedWP}')`);
      console.log(`Background image set to: ${selectedWP}`);
    };
  };
  // loadWP(); // Call the function to set the background
});

// Initialising variables
const pointsPerQuestion = 10; // user defined point system right here!!
let currentQuestionIndex = 0;
let score = 0;
let isGameActive = false;
let highScore = localStorage.getItem("highScore") || 0; // Load high score from local storage
highScoreDisplay.textContent = highScore;
let health = 100;

// AVATAR SWITCHER
// changing image functions for the wiz
function wizQuestion() {
  tuxContainer.innerHTML = "";
  // Set the new source path for the image
  let tuxImg = ` <img src="./static/img/tux/tux-question.svg" width="100"
                  height="100" alt="tux-wizard" class="wizard"
                  id="wizard-avatar"/>`;
  tuxContainer.innerHTML = tuxImg;
}
function wizHappy() {
  // Set the new source path for the image
  tuxContainer.innerHTML = "";
  // Set the new source path for the image
  let tuxImg = ` <img src="./static/img/tux/tux-happy-1.svg" width="100"
                  height="100" alt="tux-wizard" class="wizard"
                  id="wizard-avatar"/>`;
  tuxContainer.innerHTML = tuxImg;
}
function wizSad() {
  // Set the new source path for the image
  tuxContainer.innerHTML = "";
  // Set the new source path for the image
  let tuxImg = ` <img src="./static/img/tux/tux-sad.svg" width="100"
                  height="100" alt="tux-wizard" class="wizard"
                  id="wizard-avatar"/>`;
  tuxContainer.innerHTML = tuxImg;
}

function updateHealthBar(penaltyPoints) {
  health -= penaltyPoints;
  if (health <= 0) {
    health = 0;
    healthBarContainer.innerHTML = "";
    healthBarContainer.innerHTML = `<div class="health-bar-fill" id="health-bar-fill" style="width: ${health}%"></div>`;
    // setting currentQuestionIndex to 999 to end the game
    // as endgame() with currentQuestionIndex < questions.length will trigger a new question
    currentQuestionIndex = 999;
  } else {
    healthBarContainer.innerHTML = "";
    healthBarContainer.innerHTML = `<div class="health-bar-fill" id="health-bar-fill" style="width: ${health}%"></div>`;
  }
}

// GAME LOGIC

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
  healthBarContainer.innerHTML = `<div class="health-bar-fill" id="health-bar-fill" style="width: ${health}%"></div>`;
  healthBarContainer.style.display = "block";
}

function showQuestion() {
  // Reset state
  answerButtonsElement.innerHTML = "";
  feedbackMessageElement.textContent = "";
  wizQuestion();
  wizardPrompt.textContent = `Question ${currentQuestionIndex + 1}:`;

  if (currentQuestionIndex < questions.length) {
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestionIndex);
    questionTextElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("answer-btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
        button.dataset.penaltyPoints = questions.penalty;
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
  let penaltyPoints = questions[currentQuestionIndex].penalty || 0;

  if (penaltyPoints > 0) {
    penaltyPoints = parseInt(penaltyPoints);
  }
  console.log(penaltyPoints);

  if (isCorrect) {
    score += pointsPerQuestion;
    feedbackMessageElement.textContent =
      "Correct! ✨ You won " + pointsPerQuestion + " points.";
    selectedButton.classList.add("correct");
    wizHappy();
  } else {
    feedbackMessageElement.textContent =
      "Incorrect. ❌\nYou lost " + penaltyPoints + " points.";
    selectedButton.classList.add("incorrect");
    score -= penaltyPoints;
    updateHealthBar(penaltyPoints * 10);
    wizSad();
  }
  scoreDisplay.textContent = score;

  // Disable all buttons after an answer is selected
  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
  });

  // Automatically move to the next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
    pointsPerQuestion;
  }, 2500); // 1.5 second delay
}

function endGame() {
  isGameActive = false;
  feedbackMessageElement.textContent = "";
  questionTextElement.textContent = "Quiz complete!";
  answerButtonsElement.innerHTML = "";
  feedbackMessageElement.textContent = `You scored ${score} out of ${questions.length}!`;
  startButton.textContent = "Play Again";
  startButton.style.display = "block";

  // Reset health bar
  healthBarContainer.style.display = "none";
  health = 100;
  healthBarContainer.innerHTML = `<div class="health-bar-fill" id="health-bar-fill" style="width: ${health}%"></div>`;

  // block automatically starting of new game

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
