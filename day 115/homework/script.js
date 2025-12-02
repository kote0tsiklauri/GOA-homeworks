//* 1
class Temperature {
    constructor(celsius) {
      this._celsius = celsius;
    }
  
    get celsius() {
      return this._celsius;
    }
  
    set celsius(value) {
      this._celsius = value;
    }
  
    get fahrenheit() {
      return this._celsius * 9/5 + 32;
    }
  
    set fahrenheit(value) {
      this._celsius = (value - 32) * 5/9;
    }
}

//* 2
class Rectangle {
    set size({ width, height }) {
      this.width = width;
      this.height = height;
    }
  
    get area() {
      return this.width * this.height;
    }
}  

//* 3
class User {
    set firstName(value) {
      this._firstName = value;
    }
  
    set lastName(value) {
      this._lastName = value;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    print() {
      console.log("👤 User:");
      console.log(`  Full Name: ${this.fullName}`);
    }
}