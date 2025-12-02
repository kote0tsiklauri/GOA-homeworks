let div = document.getElementById('div1');
let interval;

function divClick() {
    div.removeEventListener('click', divClick);

    let step = 0;

    interval = setInterval(() => {
        if (step === 0) {
            div.style.opacity = '0'; 
        } else if (step === 1) {
            div.style.opacity = '1'; 
        } else {
            clearInterval(interval);
            div.addEventListener('click', divClick); 
        }
        step += 1;
    }, 1000); 
}

div.addEventListener('click', divClick);