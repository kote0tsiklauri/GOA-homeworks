
// დავალება 1 
const btn1 = document.getElementById('incress')
const btn2 = document.getElementById('decress')
const p = document.getElementById('p1')
//----------------------------------------------------------------------------------------

//დავალება 2
const button = document.getElementById('btn')
const text = document.getElementById('ht')

//----------------------------------------------------------------------------------------

//დავალება 3
const input = document.getElementById('inp')

//----------------------------------------------------------------------------------------

//დავალება 4
const img = document.getElementById('img')

//----------------------------------------------------------------------------------------

//დავალება 1
let count = 0


btn1.addEventListener('click', function() {
    count++;
    p.textContent = count;
})



btn2.addEventListener('click', function() {
    count--;
    p.textContent = count;
})
//----------------------------------------------------------------------------------------

//დავალება 2
button.addEventListener('click', function() {
    text.textContent = "hello word"
})

//----------------------------------------------------------------------------------------

//დავალება 3


input.addEventListener("input", function(){
    console.log(input.value)
})


//----------------------------------------------------------------------------------------

//დავალება 4

img.addEventListener("mouseover", function(){
    img.style.height = "400px"
})

img.addEventListener("mouseout", function(){
    img.style.height = "0%"
})
