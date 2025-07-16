let people = new Map([
    ["Gio", 25],
    ["Nino", 30],
    ["Luka", 22]
]);


people.set("Nika", 28);


people.delete("Luka");

console.log(people);


//* 2
let books = new Map([
    ["Clementine", "Cherie Priest"],
    ["The Alchemist", "Paulo Coelho"],
    ["Bad Company", "Megan Greenwell"]
]);

for (let [book, author] of books) {
console.log(`${book} - ${author}`);
}

//* 3
class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
}

let students = new Map();
students.set(1, new Student("Anna", 95));
students.set(2, new Student("Saba", 88));
students.set(3, new Student("Lika", 51));

console.log(students);

//* 4

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
}

let products = new Map();
products.set("A1", new Product("Laptop", 1200));
products.set("B2", new Product("Phone", 800));
products.set("C3", new Product("Tablet", 600));

for (let [id, product] of products) {
console.log(`${product.name} costs $${product.price}`);
}