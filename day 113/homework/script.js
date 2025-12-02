class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getName() {
      return this.name;
    }
  
    setName(name) {
      this.name = name;
    }
  
    getAge() {
      return this.age;
    }
  
    setAge(age) {
      this.age = age;
    }
}

class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    getTitle() {
      return this.title;
    }
  
    setTitle(title) {
      this.title = title;
    }
  
    getAuthor() {
      return this.author;
    }
  
    setAuthor(author) {
      this.author = author;
    }
  
    getPages() {
      return this.pages;
    }
  
    setPages(pages) {
      this.pages = pages;
    }
}


class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getFullName() {
      return `${this.brand} ${this.model}`;
    }
  
    getYear() {
      return this.year;
    }
  
    setYear(year) {
      this.year = year;
    }
  }