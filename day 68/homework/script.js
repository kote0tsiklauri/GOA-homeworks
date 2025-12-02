let enteredTexts = [];

function getUniqueText() {
    let userInput;
    while (true) {
        userInput = prompt("შეიყვანეთ ტექსტი: ");
        
        if (enteredTexts.includes(userInput)) {
            break; 
        } else {
            enteredTexts.push(userInput);
        }
    }
}

function roundNumber() {
    let number = Number(prompt("შეიყვანეთ რიცხვი:"));
    
    for (let i = 0; ; i++) {
        let numberString = number.toString();
        
        let isAllZeros = true;
        for (let j = 1; j < numberString.length; j++) {
            if (numberString[j] !== '0') {
                isAllZeros = false;
                break;
            }
        }
        
        if (isAllZeros) {
            alert("შედეგი: " + number);
            break;
        }

        number++;
    }
}

const correctPassword = "12348765";


let enteredPassword = "";

while (enteredPassword !== correctPassword) {
    
    enteredPassword = prompt("შეიყვანეთ პაროლი:");

    if (enteredPassword === correctPassword) {
        alert("პაროლი სწორია!");
    } else {
        alert("არასწორი პაროლი. სცადეთ ისევ.");
    }
}