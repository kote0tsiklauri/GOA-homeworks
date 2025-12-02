//* 5

function greetDecl(name) {
    return `Hello, ${name}`;
}
  
const greetExpr = function(name) {
    return `Hello, ${name}`;
};
  
console.log(greetDecl('Lasha'));
console.log(greetExpr('Lasha'))

//* 6

const person = {
    name: 'Lasha',
    say1: function() {
      console.log(this.name);
    },
    say2: () => {
      console.log(this.name); 
    }
};

person.say1(); // 'Lasha'
person.say2(); // undefined 