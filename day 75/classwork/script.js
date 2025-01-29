//! დავალება 1

function createBankAccount(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
        console.log(`${this.owner} დეპოზიტი: ${amount} ლარი`);
    };

    this.withdraw = function(amount) {
        if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`${this.owner} გამოტანა: ${amount} ლარი`);
        } else {
        console.log(`${this.owner} არ აქვს საკმარისი თანხა`);
        }
    };

    this.showBalance = function() {
        console.log(`${this.owner} ფული: ${this.balance} ლარი`);
    };
}


let account1 = new createBankAccount("გიორგი", 1000);

account1.deposit(500);

account1.withdraw(300);

account1.showBalance();




  //! დავალება 2
  
function Animal(name,waight,species){
    this.name = name;
    this.waight = waight;
    this.species = species;
    
    this.getAnimalInfo = function() {
        return `Name: ${this.name}, Age: ${this.waight}, Species: ${this.species}`;
    }
    
}
  
const dog = new Animal("Max", 28, "Dog");


console.log(dog.getAnimalInfo());