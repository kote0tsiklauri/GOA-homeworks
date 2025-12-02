const p = document.getElementById('p1');

p.textContent = 'changed text';
p.style.color = "#00f"


// დავალება 2

const img = document.getElementById('img')
const next = document.getElementById('next')
const previous = document.getElementById('previous')

function nextPhoto(){
    img.src = "#2"
}

function previousPhoto(){
    img.src = "#1"
}


// დავალება 3

let age = Number(prompt("please enter your age: "))
let exp = Number(prompt("please enter you experience: "))

if (age > 25 && exp > 5){
    console.log("you are hired")
} else {
    console.log("you did not get in")
}