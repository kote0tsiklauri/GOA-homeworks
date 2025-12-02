const output = document.getElementById('output')
function addText() {
    const text = document.getElementById('textInput').value;
    output.textContent = text ;
}

function changeColor() {
    const color = document.getElementById('colorInput').value;
    output.style.color = color;
}

function changeSize() {
    const size = document.getElementById('sizeInput').value;
    output.style.fontSize = size + "px";
}