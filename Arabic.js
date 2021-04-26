console.log("Arabic");

const arabicQuestions = [
  {
    question: "ما معنى صَه ؟",
    options: [
      "A)  اِنطِق",
      "B) تعالى",
      "C)  اُسْكت",
      "D) من لا يجيد الكلام",
    ],
    answer: 2,
  },

  {
    question: "   :يفيد حرف الجر ( في ) في قوله تعالى : اللهُ أعلمُ بما في أنفسهم  (معنى) ",
    options: [
      "A) الظرفية المكانية",
      "B) التبعيض",
      "C)  التعليل",
      "D) التعدية",
    ],
    answer: 0,
  },

  {
    question: " :يسمى الأسلوب اللغوي في قولنا  وارأساه  ",
    options: ["A) النداء", "B) التعجب", "C) الحصر", "D)  الندبة"],
    answer: 3,
  },
  {
    question: "كتاب يعتبر من مؤلفات الطبيب العربي أبو بكر الرازي، ما هو؟",
    options: ["A) هيئة الكبد", "B) الأدوية والعلل", "C) فردوس الحكمة", "D) الطب والحكمة"],
    answer: 0,
  },
  {
    question: "ما المقصود بيوم الفرقان الذي ذكره الله تعالى في القرآن؟",
    options: ["A) غزوة أحد", "B) غزوة بدر", "C) فتح مكة", "D) غزوة تبوك"],
    answer: 1,
  },
];

//console.log(arabicQuestions[0])

const options = document.querySelector(".all");

let questionCounter=1;
let currentQuestion;
let allArabicQuestions = [];
let allArabicOptions = [];
let counter = arabicQuestions.length;
let score = "";
let scoreCounter = 0;
const questionsText=document.querySelector(".questionNumber")

const setAllArabicQuestions = () => {
  const totalArabicQuestions = arabicQuestions.length;
  for (i = 0; i < totalArabicQuestions; i++) {
    allArabicQuestions.push(arabicQuestions[i]);
  }
};

const getQuestions = () => {
  //Questions
  questionsText.innerHTML="Question "+(questionCounter) +"of "+arabicQuestions.length
  options.innerHTML = "";
  const questionNumber =
    allArabicQuestions[Math.floor(Math.random() * allArabicQuestions.length)];
  currentQuestion = questionNumber;
  // console.log(currentQuestion)
  const questions = document.createElement("h2");
  questions.innerHTML = currentQuestion.question;
  questions.className = "Question";
  options.appendChild(questions);

  const index = allArabicQuestions.indexOf(questionNumber);
  allArabicQuestions.splice(index, 1);

  //console.log(questionNumber)
  // console.log(allArabicQuestions)

  //-----------------------------------------------------------------------------------------------------
  //Options
  const allOptions = currentQuestion.options.length;
  for (i = 0; i < allOptions; i++) {
    allArabicOptions.push(i);
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
  questionsText.innerHTML="Question "+(questionCounter) +"of "+arabicQuestions.length
  getQuestions();
};

//------------------------------------------------------------------------------------------

window.onload = function () {
  setAllArabicQuestions();
  getQuestions();
};
