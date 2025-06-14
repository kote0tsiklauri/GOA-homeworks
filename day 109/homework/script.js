const person1 = {
    name: "სოფო",
    lastName: "კაკაბაძე",
    age: 28,
    height: 170,
  
    // მეთოდი 1
    greet: function () {
      console.log("გამარჯობა, მე ვარ " + this.name);
    },
  
    // მეთოდი 2
    info() {
      console.log(`${this.name} არის ${this.age} წლის და სიმაღლე აქვს ${this.height} სმ.`);
    }
};