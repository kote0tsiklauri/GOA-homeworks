function checkText() {
    let inputText = prompt("შეიყვანეთ ტექსტი:"); 
    let error = false; 
    let errorIndexes = []; 


    for (let i = 0; i < inputText.length; i++) {
        // თუ სიმბოლოა რიცხვი
        if (!isNaN(inputText[i]) && inputText[i] !== ' ') {
            error = true; 
            errorIndexes.push(i); 
        }
        // თუ სიმბოლოა ნიშანი, რომელიც არ არის ლათინური ასო
        else if (!/[a-zA-Z\s]/.test(inputText[i])) {
            error = true; 
            errorIndexes.push(i); 
        }
    }

    
    if (error) {
        console.log("ერორი");
        console.log("რიცხვი/ნიშანი აღმოჩენილია ინდექსებზე: " + errorIndexes.join(", "));
    } else {
        console.log("წარმატებული ოპერაცია");
    }
}