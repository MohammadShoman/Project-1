console.log("Cars");

const carsQuestions = [
  {
    question: "Which is not a fluid your car needs? ",
    options: [
      "A) Headlight fluid",
      "B) Oil",
      "C) Gas",
      "D) Brake fluid",
    ],
    answer: 0,
  },

  {
    question: "You should always have a spare of this in your trunk.",
    options: [
      "A) Radio",
      "B) Tire ",
      "C) Steering wheel ",
      "D) Seatbelt",
    ],
    answer: 1,
  },

  {
    question: "Which vehicle is the best-selling of all time?",
    options: ["A) Ford F-Series ", "B) Toyota Corolla", "C) Chevrolet Corvette", "D) GMC Sierra"],
    answer: 1,
  },
  {
    question: "Which Japanese manufacturer is the largest on the planet?",
    options: ["A) Nissan", "B) Honda ", "C) Toyota ", "D) Suzuki"],
    answer: 2,
  },
  {
    question: "How should you control your vehicle when it begins to slide?",
    options: ["A) Turn away from the slide", "B) Hammer on the breaks", "C) Pull the e-brake", "D) Turn into the slide "],
    answer: 3,
  },
];

//console.log(carsQuestions[0])

const options = document.querySelector(".all");

let currentQuestion;
let allCarsQuestions = [];
let allCarsOptions = [];
let counter = carsQuestions.length;
let score = "";
let scoreCounter = 0;

const setAllCarsQuestions = () => {
  const totalCarsQuestions = carsQuestions.length;
  for (i = 0; i < totalCarsQuestions; i++) {
    allCarsQuestions.push(carsQuestions[i]);
  }
};

const getQuestions = () => {
  //Questions
  options.innerHTML = "";
  const questionNumber =
    allCarsQuestions[Math.floor(Math.random() * allCarsQuestions.length)];
  currentQuestion = questionNumber;
  // console.log(currentQuestion)
  const questions = document.createElement("h2");
  questions.innerHTML = currentQuestion.question;
  questions.className = "Question";
  options.appendChild(questions);

  const index = allCarsQuestions.indexOf(questionNumber);
  allCarsQuestions.splice(index, 1);

  //console.log(questionNumber)
  // console.log(allCarsQuestions)

  //-----------------------------------------------------------------------------------------------------
  //Options
  const allOptions = currentQuestion.options.length;
  for (i = 0; i < allOptions; i++) {
    allCarsOptions.push(i);
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
  setAllCarsQuestions();
  getQuestions();
};
