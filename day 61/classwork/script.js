let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let number = document.getElementById("number");

let num = 0

function updateColor(){
    if (num < 0) {
        number.style.color = "red";
    } else if (num > 0) {
        number.style.color = "green";
    } else {
        number.style.color = "black";  
    }
}



plus.addEventListener("click", function(){
    if (num >= 100) {
        alert("you cant pass 100")
    }else{
        num += 1;
        number.textContent = num;
        updateColor();
    }
    
})


minus.addEventListener("click", function(){
    if (num <= -100) {
        alert("you cant pass -100")
    }else{
        num -= 1;
        number.textContent = num;
        updateColor();
    }
})

reset.addEventListener("click", function(){
    if (num === 0) {
        alert("you can't reset");
    } else {
        num = 0;
        number.textContent = num;
        updateColor();
    }
})



