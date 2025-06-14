class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`მე ვარ ${this.name}, ${this.age} წლის.`);
    }
}

const person1 = new Person("თამარი", 25); 
person1.introduce();

//* 2

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        return "ნულზე გაყოფა არ შეიძლება";
      }
      return a / b;
    }
}

const calc = new Calculator();
console.log(calc.divide(10, 2)); 
console.log(calc.divide(10, 0));

//* 3

class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    listBooks() {
      this.books.forEach(book => {
        console.log(`"${book.title}" ავტორი: ${book.author}`);
      });
    }
}