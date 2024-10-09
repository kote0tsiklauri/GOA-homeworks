
//დავალება 1
const text = document.getElementById('tx')

text.style.color = "red"

//დავალება 2
text.style.fontWeight = "bold"


//დავალება 3
const div = document.getElementById('resizable')

div.style.width = "500px"


//დავალება 4
const bi = document.getElementById('backgroundImage');
bi.style.backgroundImage = "url('phone.webp')";

//დავალება 5

const element = document.getElementById('textAppender');
element.innerText = "new text";

//დავალება 6

const btn1 = document.getElementById('increaseNumber')
const p = document.getElementById('p1')

let count = 0

btn1.addEventListener("click", function() {
    count++;
    p.textContent = count;
})

//დავალება 7
const btn2 = document.getElementById('moveBtn')
const movediv = document.getElementById('movable')

btn2.addEventListener("click", function() {
    movediv.style.left = "200px";
})


//დავალება 8
const changeContentBtn = document.getElementById('changeContentBtn');
const contentContainer = document.getElementById('contentContainer');

changeContentBtn.addEventListener("click", function() {
    contentContainer.innerHTML = "<p>new text</p>";
});

//დავალება 9
const toggleBtn = document.getElementById('toggleBtn');
const hiddenElement = document.getElementById('hiddenElement');

toggleBtn.addEventListener('click', function() {
    hiddenElement.style.display = "block";
})