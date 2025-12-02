//* 1

class Product{
    constructor(price){
        this._price = price
    }
    get price(){
        return this._price; 
    }
    set newPrice(np){
        if(np<0){
            console.log(`new price can't be negative`)
        }else{
            this._price = np
        }
    }
}

const p = new Product(99);


console.log(p.price); 

p.newPrice = 3;   

console.log(p.price); 


//* 2

class Rectangle{
    constructor(width, height){
        this._width =width;
        this._height = height;
    }
    get area(){
        return this._width * this._height
    }

    set size({ width, height }){
        if (width < 0 || height < 0) {
            throw new Error("ზომები არ შეიძლება იყოს უარყოფითი");
          }
          this._width = width;
          this._height = height;
    }
}

let rectangle = new Rectangle(20,30)
console.log(rectangle.area)

rectangle.size = { width: 200, height: 10 };

console.log(rectangle.area)

//* 3

class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(value) {
      const parts = value.split(' ');
      this.firstName = parts[0] || '';
      this.lastName = parts[1] || '';
    }
}
