class Animal{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
}

class Dog extends Animal {
    bark() {
      return `Woof! მე ვარ ${this.name}`;
    }
}

//* 2
class Vehicle {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
}

class Car extends Vehicle{
    constructor(brand, model, year) {
        super(model, year);
        this.brand = brand;
    }

    getDescription() {
    return `ეს არის ${this.brand} ${this.model}, ${this.year}`;
    }
}

//* 3
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
}


class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName); 
        this.grade = grade;
    }

    getStudentInfo() {
        return `${this.getFullName()}, კლასი: ${this.grade}`;
    }
}