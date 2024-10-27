let input = document.getElementById("inputNumber");
let add = document.getElementById("add");
let minus = document.getElementById("subtract");
let multiplication = document.getElementById("multiply");
let resultDisplay = document.getElementById("result");

let num = 0;


function getInputValue() {
    return Number(input.value);
}

add.addEventListener("click", function() {
    num += getInputValue();
    resultDisplay.textContent = 'sum: ' + num;
});

minus.addEventListener("click", function() {
    num -= getInputValue();
    resultDisplay.textContent = 'subtract: ' + num;
    
});

multiplication.addEventListener("click", function() {
    num *= getInputValue();
    resultDisplay.textContent = 'Multiplied: ' + num;
    
});