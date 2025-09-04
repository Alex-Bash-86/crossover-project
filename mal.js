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
    question:
      "Which of the following CSS properties is used to control the spacing between lines of text?",
    answers: [
      { text: "font-spacing", correct: false },
      { text: "line-height", correct: true },
      { text: "text-spacing", correct: false },
      { text: "letter-spacing", correct: false },
    ],
  },
  {
    question: "In JavaScript, what is the '===' operator used for?",
    answers: [
      { text: "To compare values only.", correct: false },
      { text: "To assign a value to a variable.", correct: false },
      { text: "To compare values and types.", correct: true },
      { text: "To perform a logical OR operation.", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<h1_link>", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ],
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      { text: "variable myVar;", correct: false },
      { text: "var myVar;", correct: true },
      { text: "v myVar;", correct: false },
      { text: "create myVar;", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of an HTML semantic tag?",
    answers: [
      { text: "<div>", correct: false },
      { text: "<span>", correct: false },
      { text: "<footer>", correct: true },
      { text: "<p>", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the 'querySelector()' method in JavaScript?",
    answers: [
      {
        text: "To select all elements that match a CSS selector.",
        correct: false,
      },
      {
        text: "To select the first element that matches a CSS selector.",
        correct: true,
      },
      { text: "To modify the style of an element.", correct: false },
      { text: "To create a new HTML element.", correct: false },
    ],
  },
  {
    question: "In CSS, what is the 'box model'?",
    answers: [
      { text: "A method for creating responsive layouts.", correct: false },
      {
        text: "A visual formatting model where each element is rendered as a box.",
        correct: true,
      },
      { text: "A set of rules for positioning elements.", correct: false },
      { text: "A way to define the shape of an element.", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for a JavaScript 'for' loop?",
    answers: [
      { text: "for (i = 0; i <= 5; i++)", correct: true },
      { text: "for (i <= 5; i++)", correct: false },
      { text: "for (i = 0; i <= 5)", correct: false },
      { text: "for i = 1 to 5", correct: false },
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

// changing image functions for the wiz

function wizQuestion() {
  // Set the new source path for the image
  wizardAvatar.src = "./static/img/tux/tux-question.svg";
}
function wizHappy() {
  // Set the new source path for the image
  wizardAvatar.src = "./static/img/tux/tux-happy-1.svg";
}
function wizSad() {
  // Set the new source path for the image
  wizardAvatar.src = "./static/img/tux/tux-sad.svg";
}

function startGame() {
  isGameActive = true;
  startButton.style.display = "none"; // Hide start button
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = score;
  feedbackMessageElement.textContent = "";
  questionContainer.style.display = "block"; // Ensure question container is visible
  wizardPrompt.textContent = `Let's test your knowledge, adventurer!`;
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
    wizardAvatar.classList.add("happy"); // Set the new source path for the image = "./static/img/tux/tux-happy-1.svg";
  } else {
    feedbackMessageElement.textContent = "Incorrect. ❌";
    selectedButton.classList.add("incorrect");
    wizSad();
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
