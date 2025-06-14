const names = ["Ana", "Giorgi", "Nino", "Tornike", "Luka"];

names.forEach(name => {
  if (name.length > 5) {
    console.log(name);
  }
});

const numbers = [1, 4, 7, 10, 13, 16];
const evenNumbers = [];

numbers.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

console.log(evenNumbers);




const products = {
    apple: 5,
    banana: 12,
    orange: 8,
    mango: 15
};

for (let key in products) {
    if (products[key] > 10) {
        console.log(key);
}
}