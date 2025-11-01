// 1) What is TypeScript
// TypeScript is a superset of JavaScript that adds static typing and type checking.

// 2) Difference between JavaScript and TypeScript
// JavaScript - dynamically typed, no type checking before runtime.
// TypeScript - statically typed, checks for type errors before running the code.

// 3
let myString: string = "Hello";
let myNumber: number = 25;
let myBoolean: boolean = true;
let myAny: any = "Can be anything";
let myArray: number[] = [1, 2, 3];
let myTuple: [string, number] = ["Age", 30];

// 4
let age: number = 20;
let nameTS: string = "Nino";

// 5
let num1: number = 10;
let num2: number = 20;
console.log("Sum:", num1 + num2);

// 6
let username: string = "Giorgi";


// 7
function greet(name: string): string {
  return "Hello, " + name;
}
console.log(greet("Mariam"));

// 8
function sayHello(): void {
  console.log("Hello there!");
}
sayHello();

// 9
function sumFive(a: number, b: number, c: number, d: number, e: number): number {
  return a + b + c + d + e;
}
console.log("Sum of five:", sumFive(1, 2, 3, 4, 5));

// 10
let numArray: number[] = [1, 2, 3, 4];
let nameArray: string[] = ["Ana", "Luka", "Mari"];

// 11
let nums: number[] = [5, 10, 15, 20];
console.log("Numbers:", nums);

// 12
let nameList: string[] = ["Nino", "Luka", "Mari"];
console.log("Names:", nameList);

// 13
function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray(["Apple", "Banana", "Cherry"]);

// 14
function mergeArrays(arr1: any[], arr2: any[]): any[] {
  return arr1.concat(arr2);
}
console.log("Merged:", mergeArrays([1, 2], [3, 4]));

// 15
let exampleTuple: [string, number] = ["Age", 25];

// 16
let user: [string, number, boolean] = ["Giorgi", 30, true];
console.log("User tuple:", user);