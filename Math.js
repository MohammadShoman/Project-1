console.log("Math");

const mathQuestions = [
  {
    question: "Multiply: (x – 4)(x + 5) =??",
    options: [
      "A) x2 + 5x - 20",
      "B) x2 - 4x - 20",
      "C) x2 - x - 20",
      "D) x2 + x - 20",
    ],
    answer: 2,
  },

  {
    question: "Combine terms: 12a + 26b -4b – 16a =??",
    options: [
      "A) 4a + 22b,",
      "B) -28a + 30b",
      "C) -4a + 22b",
      "D) 28a + 30b",
    ],
    answer: 2,
  },

  {
    question: "Simplify: (4 – 5) – (13 – 18 + 2)=??",
    options: ["A) -1", "B) -2", "C) 1", "D) 2"],
    answer: 3,
  },
  {
    question: "Which is greater than 4 ?",
    options: ["A) 3", "B) 11", "C) -6", "D) -8"],
    answer: 1,
  },
  {
    question: "Solve for x: 2x – y = (3/4)x + 6 =??",
    options: ["A) 4(y + 6)/5", "B) (y + 6)/5", "C) (y + 6)", "D) 4(y - 6)/5"],
    answer: 0,
  },
];

//console.log(animalsQuestions[0])

const options = document.querySelector(".all");

let currentQuestion;
let allMathQuestions = [];
let allMathOptions = [];
let counter = mathQuestions.length;
let score = "";
let scoreCounter = 0;

const setAllMathQuestions = () => {
  const totalMathQuestions = mathQuestions.length;
  for (i = 0; i < totalMathQuestions; i++) {
    allMathQuestions.push(mathQuestions[i]);
  }
};

const getQuestions = () => {
  //Questions
  options.innerHTML = "";
  const questionNumber =
    allMathQuestions[Math.floor(Math.random() * allMathQuestions.length)];
  currentQuestion = questionNumber;
  // console.log(currentQuestion)
  const questions = document.createElement("h2");
  questions.innerHTML = currentQuestion.question;
  questions.className = "Question";
  options.appendChild(questions);

  const index = allMathQuestions.indexOf(questionNumber);
  allMathQuestions.splice(index, 1);

  //console.log(questionNumber)
  // console.log(allAnimalsQuestions)

  //-----------------------------------------------------------------------------------------------------
  //Options
  const allOptions = currentQuestion.options.length;
  for (i = 0; i < allOptions; i++) {
    allMathOptions.push(i);
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
  setAllMathQuestions();
  getQuestions();
};
