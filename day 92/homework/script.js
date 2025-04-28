let age = prompt("შეიყვანე შენი ასაკი:");
age = Number(age);

console.log(age >= 18 ? "სრულწლოვანი ხარ" : "არასრულწლოვანი ხარ");


let num = 0;

let result = num > 0 
    ? "დადებითი რიცხვია"
    : num === 0 
        ? "ნულია"
        : "უარყოფითია";

console.log(result);


function compareNumbers(num1, num2) {
    let result = num1 > num2 
        ? `${num1} მეტია ${num2}-ზე`
        : num2 > num1
            ? `${num2} მეტია ${num1}-ზე`
            : "Equal";

    console.log(result);
}

