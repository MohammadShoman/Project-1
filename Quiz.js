console.log("Ouiz");

const animalsQuestions = [
  {
    question: "What is the biggest animal that has ever lived ?",
    options: [
      "A) Blue whale",
      "B) African elephant",
      "C) Apatosaurus (aka Brontosaurus)",
      "D) Spinosaurus",
    ],
    answer: 0,
  },

  {
    question: "Which of these animals lives the longest?",
    options: [
      "A) Ocean quahog (clam)",
      "B) Red sea urchin",
      "C) Galapagos tortoise",
      "D) Rougheye rockfish",
    ],
    answer: 0,
  },

  {
    question: "What existing bird has the largest wingspan?",
    options: ["A) Stork", "B) Swan", "C) Condor", "D) Albatross"],
    answer: 3,
  },
  {
    question: "Which of the following animals sleeps standing up?",
    options: ["A) Gorillas", "B) Flamingos", "C) Hedgehogs", "D) Ravens"],
    answer: 1,
  },
  {
    question: "What is the fastest water animal?",
    options: ["A) Porpoise", "B) Sailfish", "C) Flying fish", "D) Tuna"],
    answer: 1,
  },
];

//console.log(animalsQuestions[0])

const options = document.querySelector(".all");

let questionCounter=1;
let currentQuestion;
let allAnimalsQuestions = [];
let allAnimalsOptions = [];
let counter = animalsQuestions.length;
let score = "";
let scoreCounter = 0;

const questionsText=document.querySelector(".questionNumber")
 

const setAllAnimalsQuestions = () => {
  const totalAnimalsQuestions = animalsQuestions.length;
  for (i = 0; i < totalAnimalsQuestions; i++) {
    allAnimalsQuestions.push(animalsQuestions[i]);
  }
};


const getQuestions = () => {
  //Questions
  questionsText.innerHTML="Question "+(questionCounter) +"of "+animalsQuestions.length
  options.innerHTML = "";
  const questionNumber =
    allAnimalsQuestions[Math.floor(Math.random() * allAnimalsQuestions.length)];
  currentQuestion = questionNumber;
  // console.log(currentQuestion)
  const questions = document.createElement("h2");
  questions.innerHTML = currentQuestion.question;
  questions.className = "Question";
  options.appendChild(questions);

  const index = allAnimalsQuestions.indexOf(questionNumber);
  allAnimalsQuestions.splice(index, 1);

  //console.log(questionNumber)
  // console.log(allAnimalsQuestions)

  //-----------------------------------------------------------------------------------------------------
  //Options
  const allOptions = currentQuestion.options.length;
  for (i = 0; i < allOptions; i++) {
    allAnimalsOptions.push(i);
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
  questionCounter++
  questionsText.innerHTML="Question "+(questionCounter) +"of "+animalsQuestions.length
  getQuestions();
};




//------------------------------------------------------------------------------------------

window.onload = function () {
  setAllAnimalsQuestions();
  getQuestions();
  
};
