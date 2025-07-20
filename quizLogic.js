let currentQuestion = 0;
let score = 0;
let userAnswers = Array(quizData.length).fill(null);

// Elements
const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const feedback = document.getElementById("feedback");
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(index) {
  const q = quizData[index];
  questionBox.innerHTML = `<strong>${q.question}</strong>`;
  optionsBox.innerHTML = "";
  feedback.textContent = "";

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="option" value="${i}" ${userAnswers[index] === i ? "checked" : ""}/>
      ${opt}
    `;
    optionsBox.appendChild(label);
    label.addEventListener("click", () => checkAnswer(i));
  });

  progress.textContent = `Question ${index + 1} of ${quizData.length}`;
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === quizData.length - 1 ? "Finish" : "Next";
}

function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestion].answer;
  userAnswers[currentQuestion] = selectedIndex;

  if (selectedIndex === correctIndex) {
    feedback.innerHTML = `✅ Correct! ${quizData[currentQuestion].explanation}`;
  } else {
    feedback.innerHTML = `❌ Incorrect. ${quizData[currentQuestion].explanation}`;
  }
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
}

function showResults() {
  score = userAnswers.reduce((acc, curr, idx) =>
    curr === quizData[idx].answer ? acc + 1 : acc, 0);

  document.body.innerHTML = `
    <div class="container">
      <h1>🎉 Quiz Complete!</h1>
      <p>Your Score: ${score} / ${quizData.length}</p>
      <h2>Review</h2>
      ${quizData.map((q, i) => `
        <div style="margin-bottom:20px;">
          <strong>Q${i + 1}: ${q.question}</strong><br/>
          <em>Your answer:</em> ${q.options[userAnswers[i]] ?? "Not answered"}<br/>
          <em>Correct answer:</em> ${q.options[q.answer]}<br/>
          <em>Explanation:</em> ${q.explanation}
        </div>
      `).join("")}
    </div>
  `;
}

// Load the first question on start
loadQuestion(currentQuestion);