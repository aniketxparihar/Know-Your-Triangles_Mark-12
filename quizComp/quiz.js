const quizForm = document.forms[0];
const question = document.querySelectorAll(".question");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

const correctAns = ["a" ,"c","b", "a","b","b"];

var score = 0;

quizForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    var data = new FormData(quizForm);
    var index=0;
    for(let element of data){
       if(element[1] == correctAns[index]){
            question[index].style.color = "#4eb84c";
            score++;
       }
       else{
        question[index].style.color = "#ff2b2b";
       } index++;
    }

    document.querySelector(".result").innerText = `Your Score is ${score}`;

});

resetBtn.addEventListener("click", ()=>{
    document.getElementById("quizForm").reset();
    score=0;
    for(var i=0;i<question.length;i++)
    {
        question[i].style.color = "#141414";
    }
    document.querySelector(".result").innerText = "Note : Your Score will be displayed here";
   
});