//! დავალება 1

function Human(name,age,hight,ID){
    this.name = name
    this.age = age
    this.hight = hight
    this.id = ID
}

let person1 = new Human("გიორგი", 30, 180, "ID001");
let person2 = new Human("მარიამი", 25, 170, "ID002");
let person3 = new Human("დავით", 35, 175, "ID003");


//! დავალება 2
function Car(name,date,engine,horsePower,color,owner){
    this.name = name
    this.age = date
    this.engine = engine
    this.power = horsePower
    this.color = color
    this.owner = owner
}

let car1 = new Car("BMW X5", 2020, "V8", 400, "შავი", person1);
let car2 = new Car("Audi A4", 2019, "I4", 200, "თეთრი", person2);
let car3 = new Car("Mercedes-Benz S-Class", 2021, "V6", 350, "ნაცრისფერი", person3);