var base = document.querySelector(".base");
var height = document.querySelector(".height");
var show = document.querySelector(".show");
var btn = document.querySelector(".calculate");
document.querySelector(".show").innerText = "Note : Base² + Height² = Hypotenuse² A hypotenuse is the longest side of a right-angled triangle";

function showresult() {
    console.log("hello");
    if(base.value === "" || height.value === ""){
        document.querySelector(".show").innerText = "Fields cannot be empty";
    }

    else if(base.value < 0 || height.value < 0){
        document.querySelector(".show").innerText = "Enter Positive values only";
    }
    
    else{
        const result = parseInt(base.value*base.value)+parseInt(height.value*height.value);
        document.querySelector(".show").innerText = `Hypotenuse of this Triangle is ${result}`; 
    }
}
btn.addEventListener("click", showresult);