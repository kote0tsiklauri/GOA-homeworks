// დავალება 1
// returns results

function sec(minute) {
    return minute * 60 + " " + "seconds";
}

console.log(sec(5));

// დავალება 2
// returns results

function math(num1,num2,num3) {
    return (num1 + num2) * num3;
}

console.log(math(1,2,3));


// დავალება 3 
// returns results

function check(num1,num2) {
    return num1 > num2;
    
}

console.log(check(3,4));

// დავალება 4 
// void function
function find(id) {
    const elem = document.getElementById(id);
    console.log("element: " + elem)
    
    
}

find("h1")