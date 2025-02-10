//! 1

class Person {
    constructor(name, age, gender, occupation, country) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
      this.country = country;
    }
  }
  
let person = new Person("John", 30, "Male", "Developer", "USA");

//! 2


class NumberArrays {
    constructor() {
      this.row_0 = [2, 4, 6, 8, 10];
      this.row_1 = [1, 3, 5, 7, 9];
    }
  
    printArrays() {
      let length = this.row_0.length;
      for (let i = 0; i < length; i++) {
        console.log(this.row_0[i], this.row_1[i]);
      }
    }
}
  
let obj = new NumberArrays();
obj.printArrays();

//! 3

function generateArray(obj) {
    let result = [];
    for (let i = 0; i < obj.quantity; i++) {
      result.push(obj.element);
    }
    return result;
}
  
let myObject = { quantity: 3, element: "Apple" };
  
console.log(generateArray(myObject));