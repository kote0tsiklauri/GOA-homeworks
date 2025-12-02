function name(id) {
    const elem = document.getElementById(id);
    
    elem.textContent = "გამარჯობა";
}

name("tx1")


function sum(num1 , num2 , num3) {
    let count = num1 * num2 * num3;
    return count;
}

sum(1 , 2 , 3)