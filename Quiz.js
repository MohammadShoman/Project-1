
console.log("Ouiz")




const animalsQuestions=[
    {question:"What is the biggest animal that has ever lived ?",
    options:["A) Blue whale","B) African elephant","C) Apatosaurus (aka Brontosaurus)","D) Spinosaurus"],
    answer:0
},

    {question:"Which of these animals lives the longest?",
        options:["A) Ocean quahog (clam)","B) Red sea urchin","C) Galapagos tortoise","D) Rougheye rockfish"],
        answer:0
    },

    {
        question:"What existing bird has the largest wingspan?",
        options:["A) Stork",
            "B) Swan",
            "C) Condor" ,
            "D) Albatross"],
        answer:3
    },
    {
        question:"Which of the following animals sleeps standing up?",
        options:["A) Gorillas",
            "B) Flamingos",
            "C) Hedgehogs" ,
            "D) Ravens"],
        answer:1
    },
    {
        question:"What is the fastest water animal?",
        options:["A) Porpoise",
            "B) Sailfish",
            "C) Flying fish" ,
            "D) Tuna"],
        answer:1
    }
]


    //console.log(animalsQuestions[0])


    const questions=document.querySelector("h2")
    
    const options=document.querySelector(".all")

    let currentQuestion;
    let allAnimalsQuestions=[]
    let allAnimalsOptions=[]
    let counter=animalsQuestions.length;



    const setAllAnimalsQuestions=()=>{
        const totalAnimalsQuestions=animalsQuestions.length;
        for(i=0;i<totalAnimalsQuestions;i++){
            allAnimalsQuestions.push(animalsQuestions[i])
        }
    }



    const getQuestions=()=>{
        //Questions
        const questionNumber=allAnimalsQuestions[Math.floor(Math.random()*allAnimalsQuestions.length)]
        currentQuestion=questionNumber
       // console.log(currentQuestion)

        questions.innerHTML=currentQuestion.question;
        const index= allAnimalsQuestions.indexOf(questionNumber)
        allAnimalsQuestions.splice(index, 1)
        //console.log(questionNumber)
       // console.log(allAnimalsQuestions)
        
       //-----------------------------------------------------------------------------------------------------
       //Options
        const allOptions =currentQuestion.options.length
        for(i=0;i<allOptions;i++){
            allAnimalsOptions.push(i)
        }

        for(i=0;i<allOptions;i++){

        const answer=document.createElement("button")
        
        answer.innerHTML=currentQuestion.options[i]
        
        answer.className="btn"
        options.appendChild(answer)
        
        
        
        //console.log(currentQuestion.options[i])
        }


        counter--
    }


    

     
    //------------------------------------------------------------------------------------------
    const next=()=>{
        if(counter===0){
            console.log("test is over")
        }else{
            getQuestions()
        }

    }

    //------------------------------------------------------------------------------------------
    window.onload=function(){
        setAllAnimalsQuestions()
        getQuestions()
        
    }

