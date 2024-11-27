function calculate() {
                
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    
    const operation = document.getElementById("operation").value.trim();

    
    console.log("Operation entered: '" + operation + "'");

    let result;  // Use let instead of var or const

    // ოპერაციის შესრულება
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    }

    
    document.getElementById("result").innerHTML = "რეზულტატი: " + result;
}