var angle1 = document.querySelector(".angle1");
var angle2 = document.querySelector(".angle2");
var angle3 = document.querySelector(".angle3");
var show = document.querySelector(".show");
var btn = document.querySelector(".calculate");
document.querySelector(".show").innerText = "Sum Of All Angles of Triangle is 180";

function showresult() {
    console.log("hello");
    if(angle1.value === "" || angle2.value === ""|| angle3.value === ""){
        document.querySelector(".show").innerText = "Fields cannot be empty";
    }

    else if(angle1.value < 0 || angle2.value < 0|| angle2.value < 0){
        document.querySelector(".show").innerText = "Enter Positive values only";
    }
    
    else{
        const result = parseInt(angle1.value)+parseInt(angle2.value)+parseInt(angle3.value);
        console.log(result);
        if (result === 180) { document.querySelector(".show").innerText = "Triangle is Possible"; }
        else { document.querySelector(".show").innerText = "Triangle is not Possible"; }
    }
}
btn.addEventListener("click", showresult);