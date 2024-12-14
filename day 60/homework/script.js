//! დავალება 1

let num = prompt("please input number: ")


//* თუ რიცვი ლუწია და მეტია 10
if (num % 2 === 0 && num > 10) {
    console.log("number is even and more than 10.");
}

//* თუ რიცხვი კენტია და ნაკლებია 5
else if (num % 2 !== 0 && number < 5) {
    console.log("number is odd and less than 5.");
}

//* თუ რიცხვი მეტია 20 ან ნაკლებია 5
else if (num > 20 || num < 5) {
    console.log("the number is more than 20 or less than 5.");
}

//* თუ რიცხვი არ არის მეტი 10 და ნაკლები 5
else if (num >! 10 && num <! 5){
    console.log("number is not more than 10 and less than 5");
}

//! დავალება 2

let age = prompt("please enter you age:");
let parentconsent = prompt("do you have you parents consent? (yes/no)");

//* თვრამეტზე მეტის თუა 
if (age >= 18) {
    console.log("you are adult.");
} 

//* თუ თვრამეტის არა და მშობლის ნებართვა აქვს
else if (age < 18 && parentconsent === "yes") {
    console.log("you can use this server.");
} 

else {
    console.log("you can use this server.");
}

//! დავალება 3 (დამატებითი)

let side1 = Number(prompt("Enter the length of the first side:"));
let side2 = Number(prompt("Enter the length of the second  side:"));
let side3 = Number(prompt("Enter the length of the third side:"));

//* შემოწმება, თუ ყველა გვერდი დადებითია
if (side1 > 0 && side2 > 0 && side3 > 0) {
    //* შემოწმება, თუ ნებისმიერი ორი გვერდის ჯამი მეტია მესამეზე
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        console.log("These three sides can form a triangle.");
    } else {   
        console.log("These three sides cannot form a triangle."); //* თუ არა ნებისმიერი ორი გვერდის ჯამი მესამეზე
    }
} 
//* თუ ყველა გვერდი დადებითი არა
else {
    console.log("Please enter positive values for all sides.");
}