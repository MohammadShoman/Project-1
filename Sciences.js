console.log("Sciences");

const sciencesQuestions = [
  {
    question:
      "Which of the following is a non metal that remains liquid at room temperature ?",
    options: ["A) Phosphorouse", "B) Bromine", "C) Chlorine", "D) Helium"],
    answer: 1,
  },

  {
    question: "Which of the following is used in pencils ?",
    options: ["A) Graphite", "B) Silicon", "C) Charcoal", "D) Phosphorous"],
    answer: 0,
  },

  {
    question: "Chemical formula for water is ?",
    options: ["A) NaAlO2", "B) Al2O3", "C) H2O", "D) CaSiO3"],
    answer: 2,
  },
  {
    question: "Which of the gas is not known as green house gas ?",
    options: [
      "A) Methane",
      "B) Nitrous oxide",
      "C) Carbon dioxide",
      "D) Hydrogen",
    ],
    answer: 3,
  },
  {
    question: "The hardest substance available on earth is ?",
    options: ["A) Gold", "B) Iron", "C) Diamond", "D) Platinum"],
    answer: 2,
  },
];

//console.log(sciencesQuestions[0])

const options = document.querySelector(".all");

let questionCounter = 1;
let currentQuestion;
let allSciencesQuestions = [];
let allSciencesOptions = [];
let counter = sciencesQuestions.length;
let score = "";
let scoreCounter = 0;
const questionsText = document.querySelector(".questionNumber");

const setAllSciencesQuestions = () => {
  const totalSciencesQuestions = sciencesQuestions.length;
  for (i = 0; i < totalSciencesQuestions; i++) {
    allSciencesQuestions.push(sciencesQuestions[i]);
  }
};

const getQuestions = () => {
  //Questions
  questionsText.innerHTML =
    "Question " + questionCounter + "of " + sciencesQuestions.length;
  options.innerHTML = "";
  const questionNumber =
    allSciencesQuestions[
      Math.floor(Math.random() * allSciencesQuestions.length)
    ];
  currentQuestion = questionNumber;
  // console.log(currentQuestion)
  const questions = document.createElement("h2");
  questions.innerHTML = currentQuestion.question;
  questions.className = "Question";
  options.appendChild(questions);

  const index = allSciencesQuestions.indexOf(questionNumber);
  allSciencesQuestions.splice(index, 1);

  //console.log(questionNumber)
  // console.log(allSciencesQuestions)

  //-----------------------------------------------------------------------------------------------------
  //Options
  const allOptions = currentQuestion.options.length;
  for (i = 0; i < allOptions; i++) {
    allSciencesOptions.push(i);
  }

  for (i = 0; i < allOptions; i++) {
    options.innerHTML += `<button class="btn" id="btn${i}" onclick="getResult(${i},${currentQuestion.answer})"  >${currentQuestion.options[i]}</button>`;
  }

  //console.log(currentQuestion.options[i])

  counter--;
};

const getResult = (answer, correctAnswer) => {
  console.log("getResult");

  if (answer === correctAnswer) {
    console.log(true);
    document.querySelector("#btn" + answer).style.backgroundColor = "green";
    scoreCounter++;
    score = `                   Test Is Over 
    ---------------------------------
    your score is ---> ${scoreCounter}/5
    ---------------------------------
    Good luck`;
    //console.log(score);
    document.querySelector("#btn" + answer).onclick = false;
  } else {
    console.log(false);
    document.querySelector("#btn" + answer).style.backgroundColor = "red";
    document.querySelector("#btn" + answer).style.color = "black";
    document.querySelector("#btn" + correctAnswer).style.backgroundColor =
      "green";
    score = `                   Test Is Over 
     ---------------------------------
     your score is ---> ${scoreCounter}/5
     ---------------------------------
     Good luck`;
    document.querySelector("#btn" + answer).onclick = false;
    document.querySelector("#btn" + correctAnswer).onclick = false;
    //console.log(score);
  }
};

//------------------------------------------------------------------------------------------
//next button

const next = () => {
  if (counter === 0) {
    alert(score);
    return window.location.assign("Test.html");
  }
  questionCounter++;
  questionsText.innerHTML =
    "Question " + questionCounter + "of " + sciencesQuestions.length;
  getQuestions();
};

//------------------------------------------------------------------------------------------

window.onload = function () {
  setAllSciencesQuestions();
  getQuestions();
};
