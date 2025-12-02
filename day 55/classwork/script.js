function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value; 
    let result = document.getElementById("result"); 

    let math;


    if (operation == '+') {
        math = num1 + num2;
    } else if (operation == '-') {
        math = num1 - num2;
    } 

    
    result.textContent = math;
}




num1 = Number(prompt("please enter first number: "))
num2 = Number(prompt("please enter second number: "))
operation = prompt("write division or addition: ")


let result;

if (operation == "+"){
    result = num1 + num2;
}
else if (operation == "-") {
    result = num1 - num2;
}


console.log(result)