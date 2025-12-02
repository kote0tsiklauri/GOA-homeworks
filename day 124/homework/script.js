// ამოცანა 1
let count = 0;
function increase() {
    count++;
    document.getElementById("number").textContent = count;
}
function decrease() {
    count--;
    document.getElementById("number").textContent = count;
}

// ამოცანა 2
function checkWord() {
    let word = document.getElementById("inputWord").value.trim().toLowerCase();
    let message = document.getElementById("message");
    if (word === "hello") {
        message.textContent = "Welcome!";
        message.style.color = "green";
    } else {
        message.textContent = "Try again!";
        message.style.color = "red";
    }
}

// ამოცანა 3
function toggleImage() {
    let img = document.getElementById("myImage");
    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}