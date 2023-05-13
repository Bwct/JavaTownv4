
let questions = [

    //first question
{
  id: 1,
  questions: "THIS IS A TEST QUESTION1",
  answer: "Real Answer",
  options: [

      "TestAnswer",
      "Real Answer",
      "test",
      "testingg"
  ]
},

{
  id: 2,
  questions: "THIS IS A TEST QUESTION2",
  answer: "Real Answer2",
  options: [

      "Real Answer2",
      "TestAnswer2",
      "teeeest",
      "teeeeeestinggg"
  ]
},

]

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);
}

function show(count) {
  let question = document.getElementById("quizAns");
  let[first, second] = questions[count].options;

  question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
                    <ul class="option_group">
                        <li class="option">option 1</li>
                        <li class="option">option 2</li>
                        <li class="option">option 3</li>
                        <li class="option">option 4</li>
                    </ul>`;
            toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for(let i=0; i < option.length; i++) {

    option[i].onclick = function() {
      for(let i=0; i < option.length; i++) {
        if(option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");

    }


  }
}


function next() {

    if(question_count == question.length - 1) {
      location.href = "final.html";

    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;

  if(user_answer == questions[question.count].answer) {
  points += 1;
  sessionStorage.setItem("points",points);
  }

console.log(points);

question_count++;
show(question_count);
}



/*
const questionElement = document.getElementById('quizQue');
const answerButton = document.getElementById('ansButtons');
const nextButton = document.getElementById('quizNext');

let currentQuestionsIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionsIndex = 0;
  score = 0;
  nextButton.style.display = "block";
  nextButton.innerHTML = "NEXT";


}

function showQuestion() {

  let currentQuestion = questions[currentQuestionsIndex];
  let questionNo = currentQuestion + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btns");
    answerButton.appendChild(button);
  });
}

startQuiz();

*/

