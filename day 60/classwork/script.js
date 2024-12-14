//! დავალება 1

let x = document.getElementsByClassName("par");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    
    for (let i = 0; i < x.length; i++) {
        if (x[i].textContent === "გამარჯობა") {
            x[i].textContent = "ნახვამდის";
        } else {
            x[i].textContent = "გამარჯობა";
        }
    }
});


//! დავალება 2

let btns = document.getElementsByClassName("btns");


for(let j =0;j < btns.length; j++){
    btns[j].addEventListener("click", function(){
        console.log("buttons " + j)
    })
}


//! დავალება 3

let rows = document.getElementsByClassName('rows');
let value = 1;  
for (let i = 0; i < rows.length; i++) {
    rows[i].textContent = value;  
    value *= 2;  
}



let size = 50;  

for (let i = 0; i < rows.length; i++) {
    
    rows[i].style.width = size + 'px';
    rows[i].style.height = size + 'px';

    size *= 2;
}