
let questions = [
  {
    id: 1,
    question: "How often have you been bothered by feeling down, depressed, irritable, or hopeless over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",
    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 2,
    question: "How often have you been bothered that you have little interest or pleasure in doing things over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",
    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 3,
    question: "How often have you been bothered by trouble falling asleep, staying asleep, or sleeping too much over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",
    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 4,
    question: "How often have you been bothered that you have poor appetite, weight loss, or overeating over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",

    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 5,
    question: "How often have you been bothered by feeling tired, or having little energy over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",

    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 6,
    question: "How often have you been bothered by feeling bad about yourself – or feeling that you are a failure, or that you have let yourself or your family down over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",

    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 7,
    question: "How often have you been bothered that you have trouble concentrating on things like school work, reading, or watching TV over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",

    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 8,
    question: "How often have you been bothered by moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you were moving around a lot more than usual over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",

    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 9,
    question: "How often have you been bothered by thoughts that you would be better off dead, or of hurting yourself in some way over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",

    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  {
    id: 10,
    question: "How often have you been bothered by thoughts of you being negative in others perspective over the last two weeks?",
    pointLow: "Not at all",
    pointMid:"More than half of the days",
    pointHigh:"Several days",
    pointVeryHigh:"Nearly every day",

    options: [
      "Not at all",
      "Several days",
      "More than half of the days",
      "Nearly every day"
    ]
  },
  // {
  //   id: 4,
  //   question: "How often have you been bothered that you have poor appetite, weight loss, or overeating over the last two weeks?",
  //   pointLow: "Not at all",
  //   pointMid:"More than half of the days",
  //   pointHigh:"Several days",
  //   pointVeryHigh:"Nearly every day",

  //   options: [
  //     "Not at all",
  //     "Several days",
  //     "More than half of the days",
  //     "Nearly every day"
  //   ]
  // },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].pointLow) {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  else if (user_answer == questions[question_count].pointMid){
    points += 3;
    sessionStorage.setItem("points", points);
  }
  else if (user_answer == questions[question_count].pointHigh){
    points += 6;
    sessionStorage.setItem("points", points);
  }
  else if (user_answer == questions[question_count].pointVeryHigh){
    points += 9;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
