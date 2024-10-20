// დავალება 1

function hello() {
    return "გამარჯობა";
}

// დავალება 2
hello()
function greet(name) {
    return "გამარჯობა" + " " + name;
}
greet("kote");

// დავალება 3
function add(int) {
    let result = int + 1;
    return result;
}

add(4);

// დავალება 4
function negative(num1) {
    return num1 * -1
}
console.log(negative(123) + 1)

negative(43);

// დავალება 5




function stylechange(id){
    let func = document.getElementById(id);
    func.textContent = "change number 1-3";
    func.style.backgroundColor = "blue";
    func.style.fontSize = "18px";
}


stylechange("change")