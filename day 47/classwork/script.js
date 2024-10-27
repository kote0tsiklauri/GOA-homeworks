const btn = document.getElementById("btn");
const name = document.getElementById("name");
const input = document.getElementById("lastName");
const h2 =  document.getElementById("header2");

let input1 = prompt("pleas enter your name: ");
name.textContent = input1.value;
name.style.textalign


function getInputValue() {
    return input.value;
}

btn.addEventListener("onClick", function() {
    h2.textContent = getInputValue(); 
});