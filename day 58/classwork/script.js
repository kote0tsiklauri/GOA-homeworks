let fruits = ["banana", "apple", "mango"]

function length(arr){
    count = 0
    for (let i = 0; i < arr.length; i++) {
        count++;
    }
    return count;
}

console.log(length(fruits))






//! დავალება 2

console.log(fruits.length) //* console.log გამოყენებით ჯერ ვწერთ სის სახელს ამ შემთხვევაში fruits  და შემდეგ ვიყენებთ ჩაშენებულ ფუნქციას .length სიგრძის გასგებად



//! დავალება 3
//  სია, რომელიც შეიცავს ინტეგერს
let numbersArray = [1, 2, 3, 4, 5];

//  სია, რომელიც შეიცავს სტრინგებს
let stringsArray = ["apple", "banana", "cherry", "date"];

// toString() მეთოდის გამოყენება ინტეგერების სიისთვის
let numbersToString = numbersArray.toString();

// toString() მეთოდის გამოყენება სტრინგების სიისთვის
let stringsToString = stringsArray.toString();


console.log(numbersToString);
console.log(stringsToString);






//! დავალება 4
let phoneNumberArray = ["123", "456", "789"];

// გამოიყენეთ join() ფუნქცია, რათა ელემენტები დავაკავშიროთ ტირეთი
let formattedPhoneNumber = phoneNumberArray.join("-");


console.log(formattedPhoneNumber);