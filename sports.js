console.log("Sports");

const sportsQuestions = [
  {
    question: "In 1924 the first winter Olympics was held in ?",
    options: [
      "A)  Italy",
      "B) France",
      "C) Austria",
      "D) Canada",
    ],
    answer: 1,
  },

  {
    question: "When did the World Chess Championship begin officially ?",
    options: [
      "A) 1946",
      "B) 1925",
      "C) 1899",
      "D) 1886",
    ],
    answer: 3,
  },

  {
    question: "Which of the following is not the main sponsor of UEFA Champions League ?",
    options: ["A) MasterCard", "B) Gazprom", "C) Nissan", "D) Apple"],
    answer: 3,
  },
  {
    question: "In which year did Maradona score a goal with his hand ?",
    options: ["A) 1982", "B) 1990", "C) 1986", "D) 1992"],
    answer: 2,
  },
  {
    question: "How matches did Mohammed Ali lose in his career ?",
    options: ["A) Only one", "B) Tow times", "C) Three times", "D) Four times"],
    answer: 0,
  },
];

//console.log(sportsQuestions[0])

const options = document.querySelector(".all");

let currentQuestion;
let allSportsQuestions = [];
let allSportsOptions = [];
let counter = sportsQuestions.length;
let score = "";
let scoreCounter = 0;

const setAllSportsQuestions = () => {
  const totalSportsQuestions = sportsQuestions.length;
  for (i = 0; i < totalSportsQuestions; i++) {
    allSportsQuestions.push(sportsQuestions[i]);
  }
};

const getQuestions = () => {
  //Questions
  options.innerHTML = "";
  const questionNumber =
    allSportsQuestions[Math.floor(Math.random() * allSportsQuestions.length)];
  currentQuestion = questionNumber;
  // console.log(currentQuestion)
  const questions = document.createElement("h2");
  questions.innerHTML = currentQuestion.question;
  questions.className = "Question";
  options.appendChild(questions);

  const index = allSportsQuestions.indexOf(questionNumber);
  allSportsQuestions.splice(index, 1);

  //console.log(questionNumber)
  // console.log(allSportsQuestions)

  //-----------------------------------------------------------------------------------------------------
  //Options
  const allOptions = currentQuestion.options.length;
  for (i = 0; i < allOptions; i++) {
    allSportsOptions.push(i);
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

  getQuestions();
};

//------------------------------------------------------------------------------------------

window.onload = function () {
  setAllSportsQuestions();
  getQuestions();
};
