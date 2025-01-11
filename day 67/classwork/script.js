function catMouse(x) {
    let cat = null;
    let mouse = null;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'C') {
        cat = i; 
        }
        if (x[i] === 'm') {
        mouse = i;
        }
    }

    if (mouse - cat <= 4) {
        return "Caught!"; 
    } else {
        return "Escaped!"; 
    }
}