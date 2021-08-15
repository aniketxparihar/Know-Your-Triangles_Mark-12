const quizForm = document.forms[0];
const question = document.querySelectorAll(".question");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

//Correct Answers of the questions
const correctAns = ["b" ,"b","b", "c","a","a"];

var score = 0;
//event listener for submit button
quizForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    var data = new FormData(quizForm);
    var index = 0;
    console.log(data)
    for (let element of data) {
        console.log(element)
       if(element[1] == correctAns[index]){//each 
            question[index].style.color = "#4eb84c";
            score++;//incrementing score inside the if
       }
       else{//
        question[index].style.color = "#ff2b2b";
       } index++;//incrementing index for question array
    }//end of loop

    document.querySelector(".result").innerText = `Your Score is ${score}`;

});
//event listener for Reset Button
resetBtn.addEventListener("click", ()=>{
    document.getElementById("quizForm").reset();
    score=0;
    for(var i=0;i<question.length;i++)
    {//Changing the colors of element back to black
        question[i].style.color = "#141414";
    }//display score
    document.querySelector(".result").innerText = " Your Score will be displayed here";
   
});