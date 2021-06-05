questions =[
    {
        Question: "Q1. which is the most popular programming language?",
        Answers : [
            {
                Ans: "1. Java",
                correct:false
            },
            {
                Ans: "2. Javascript",
                correct:true
            },
            {
                Ans: "3. C++",
                correct:false
            },
            {
                Ans: "4. Python",
                correct:false
            }
        ]
    },
    {
        Question: "Q2. The Harry Potter is written by?",
        Answers : [
            {
                Ans: "1. J.K Rolling",
                correct:true
            },
            {
                Ans: "2. Chetan Bhagat",
                correct:false
            },
            {
                Ans: "3. James Joyce ",
                correct:false
            },
            {
                Ans: "4. Charles Dickens",
                correct:false
            }
        ]
    },
    {
        Question: "Q3. This personality is credited with the invention of e-mail. Can you identify him from the given?",
        Answers : [
            {
                Ans: "1. T. Leo Burns",
                correct:false
            },
            {
                Ans: "2. Larry Page",
                correct:false
            },
            {
                Ans: "3. Ray Tomlinson ",
                correct:true
            },
            {
                Ans: "4. R.K. Narayan",
                correct:false
            }
        ]
    },
    {
        Question: "Q4. ‘Ansett’ is the name of the domestic airline of which of the following countries?",
        Answers : [
            {
                Ans: "1. New Zealand",
                correct:false
            },
            {
                Ans: "2. Germany",
                correct:false
            },
            {
                Ans: "3. Netherland",
                correct:false
            },
            {
                Ans: "4. Australia",
                correct:true
            }
        ]
    },
    {
        Question: "Q5. The largest river (in terms of volume of water it carries) is….",
        Answers : [
            {
                Ans: "1. Nile",
                correct:false
            },
            {
                Ans: "2. Amazon",
                correct:true
            },
            {
                Ans: "3. Mississippi Missouri",
                correct:false
            },
            {
                Ans: "4. Yangtze",
                correct:false
            }
        ]
    }

];

const sbtn= document.querySelector(".start-button");
const qContainer = document.querySelector(".question-container");
const Questions= document.querySelector(".questions p");
const nextQuestion = document.querySelector(".next-button");
const ansContainer = document.querySelector(".answer-container");
const thanks = document.querySelector(".thanks");
const obtained = document.querySelector(".obtained-marks");
const max = document.querySelector(".max-marks");
const scoreDisplay = document.querySelector("#score-display");
const obtainedScore = document.querySelector("#ObtainedScore");
var count =0;
sbtn.addEventListener("click",function(){
    sbtn.classList.add("hide");
    qContainer.classList.remove("hide");
    questionArray = questions;
    currentindex=0;
    show(questionArray[currentindex]);
    
});

function show(question){
    Questions.innerText = question.Question;
    question.Answers.forEach(function(ans){
    const elem = document.createElement('button');
    elem.innerText = ans.Ans;
    elem.classList.add("answer");
    if(ans.correct){
     elem.dataset.correct = ans.correct;
    
    }
    ansContainer.appendChild(elem);
    elem.addEventListener("click",setAnswer);
    
  });
  
}

 function setAnswer(e){
     const CorrectAns = e.target.dataset.correct;
     if(CorrectAns){
        console.log(count);
        count =count+20;
        scoreDisplay.innerText = count;
     }
     console.log(CorrectAns);
     questions.forEach(function(question){
               question.Answers.forEach(function(answ){
                        console.log(answ);
               });
     })
        Array.from(ansContainer.children).forEach(function(btn){
           setStatus(btn.dataset.correct, btn);
     });
    
     }
     function setStatus(correct, clickedbtn){
        if(correct){
            clickedbtn.classList.add("success");
        }
        else {
            clickedbtn.classList.add("failure");
        }
     }
     
  nextQuestion.addEventListener("click",setNext);
 function setNext(){
     reset();
    currentindex++;
    show(questionArray[currentindex]);
   
 }

 function reset(){
    if(currentindex == questions.length-1){
       thanks.classList.remove("hide");
       qContainer.classList.add("hide");
        obtained.classList.add("hide");
        max.classList.add("hide");
        obtainedScore.innerText = count; 
    }
     Questions.innerText= "";
     while(ansContainer.firstChild){
         ansContainer.removeChild(ansContainer.firstChild);
     }
 }

 

 
