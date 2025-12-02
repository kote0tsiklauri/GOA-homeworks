const box = document.getElementById('box');


let isRed = true;
let radius = 0;
let left = 0

function changeStyle() {
    radius += 10;
    if (radius > 100) radius = 0; 

    box.style.borderRadius = radius + '%';
    box.style.backgroundColor = isRed ? 'blue' : 'red';
    isRed = !isRed;
}
function move() {
    left += 100;

    box.style.left = left + "px";

}
setInterval(changeStyle, 5000);
setInterval(move, 1000);