var base = document.querySelector(".base");
var height = document.querySelector(".height");
var show = document.querySelector(".show");
var btn = document.querySelector(".calculate");
function showanswer() {
    
    if(base.value === "" || height.value === ""){
        document.querySelector(".show").innerText = "Fields cannot be empty";
    }

    else if(base.value < 0 || height.value < 0){
        document.querySelector(".show").innerText = "Enter Positive values only";
    }
    
    else{
        var result = 0.5 * base.value * height.value;
        console.log("area : "+result);
        document.querySelector(".show").innerText = "Area of this triangle is "+result;
    }
}
btn.addEventListener("click", showanswer);