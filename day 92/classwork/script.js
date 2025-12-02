let number = Number(prompt("pleas enter number: "))

let result = (number % 2 === 0) ? "two" : number

console.log(result)


let num = Number(prompt("enter number: "))

result = (num % 2 === 0) ? num*8 : num*9

console.log(result)


function checkNumber(number) {
  let result = (number > 0) ? "Positive" : "Negative";
  console.log(result);
}

checkNumber(5);
checkNumber(-3);


function func(arr){
    let random = Math.floor(Math.random()* arr.length);
    return arr[random]
}

console.log(func([1,2,3,4,5,6,7,8,9]))