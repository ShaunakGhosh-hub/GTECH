
  // Quiz questions and answers
  const quizQuestions = [
    {
      question: "1. In which phase are bugs fixed??",
      options: ["DESIGN", "MAINTAINENCE", "TESTING"],
      answer: 0
    },
    {
      question: "2. What is the first phase of the Waterfall model?",
      options: ["DESIGN", "Coding", "Feasibility Study"],
      answer: 2
    },
    // Add more questions here
  ];

  // Current question index
  let currentQuestion = 0;

  // Score
  let score = 0;

  // Start quiz button event listener
  document.getElementById("startQuiz").addEventListener("click", startQuiz);

  // Next question button event listener
  document.getElementById("nextQuestion").addEventListener("click", nextQuestion);

  // Submit answer button event listener
  document.getElementById("submitAnswer").addEventListener("click", submitAnswer);

  // Function to start the quiz
  function startQuiz() {
    document.getElementById("quizQuestions").style.display = "block";
    document.getElementById("startQuiz").style.display = "none";
    showQuestion();
  }

  // Function to show the current question
  function showQuestion() {
    const question = quizQuestions[currentQuestion];
    document.getElementById("questionTitle").textContent = `Question ${currentQuestion + 1}`;
    document.getElementById("questionText").textContent = question.question;
    const optionsHTML = question.options.map((option, index) => {
      return `<li><input type="radio" id="option${index}" name="answer"><label for="option${index}">${option}</label></li>`;
    }).join("");
    document.getElementById("options").innerHTML = optionsHTML;
  }

  // Function to go to the next question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      showQuestion();
    } else {
      document.getElementById("quizQuestions").style.display = "none";
      document.getElementById("results").style.display = "block";
      showResults();
    }
  }

  // Function to submit the answer
  function submitAnswer() {
    const answer = document.querySelector("input[name='answer']:checked");
    if (answer) {
      const question = quizQuestions[currentQuestion];
      if (question.options.indexOf(answer.nextElementSibling.textContent) === question.answer) {
        score++;
      }
    }
    nextQuestion();
  }

  // Function to show the results
  function showResults() {
    document.getElementById("resultText").textContent = `You scored ${score} out of ${quizQuestions.length}.`;
  }



// scripts.js

// Toggle sidebar when the hamburger icon is clicked
document.getElementById('toggleMenu').addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active'); // Toggle the 'active' class to show/hide the sidebar
});

// Close the sidebar when any link inside it is clicked (only for mobile)
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

sidebarLinks.forEach(link => {
  link.addEventListener('click', function() {
      const sidebar = document.querySelector('.sidebar');
      
      // Only close sidebar if it's currently active (open) on mobile
      if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
          sidebar.classList.remove('active'); // Remove 'active' class to hide the sidebar
      }
  });
});

