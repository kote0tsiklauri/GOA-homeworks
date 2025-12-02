const start = document.getElementById('start');
const end = document.getElementById('end');
const output = document.getElementById('output')

const num = document.getElementById('num')
const char = document.getElementById('char')

let timeout;

function update(){
    if(num.checked){
        output.textContent = Math.floor(Math.random() * 100) ;
    }else if(char.checked){
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomChar = letters[Math.floor(Math.random() * letters.length)];
        output.textContent = randomChar;
    }
    timeout = setTimeout(update, 1000);
}

start.addEventListener('click', function() {
    update(); 
});

end.addEventListener('click', function() {
    clearTimeout(timeout); 
    output.textContent = '';
});

