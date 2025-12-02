function Car(name,date,engine){
    this.name = name
    this.age = date
    this.engine = engine
}

let car1 = new Car("Toyota", 2020, "V6");
let car2 = new Car("Honda", 2018, "V4");
let car3 = new Car("Ford", 2021, "V8");

function Animal(breed,weight,age){
    this.breed = breed
    this.weight = weight
    this.age = age
}

let animal1 = new Animal("Dog", 30, 5);
let animal2 = new Animal("Cat", 10, 3);
let animal3 = new Animal("Rabbit", 4, 2);


function Human(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let human1 = new Human("John", 30, "Male");
let human2 = new Human("Alice", 25, "Female");
let human3 = new Human("Bob", 35, "Male");