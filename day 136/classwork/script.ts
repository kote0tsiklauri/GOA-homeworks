
//* 2
function sayHelloo(name: string): string{
    return `hello ${name}`
}

//* 3
function calculator(a:number,b:number){
    console.log(a + b)
    console.log(a * b)
    console.log(a - b)
}

//* 4
function multiply(a:number,b:number = 2):number{
    return a * b
}

//* 5
let names: string[] = ["lasha","gio","dato"]
console.log(names)

//* 6
const numbers: number[] = [10, 20, 30, 40, 50];

for (let num of numbers) {
    console.log(num);
}