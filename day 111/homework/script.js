//* 1
const colors = ["red", "green", "blue", "yellow", "purple"];

const [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor);    
console.log(secondColor);   
console.log(otherColors);

//* 2
const user = {
    name: "ლილე",
    age: 30,
    country: "Georgia"
};

const { Name, country } = user;

console.log(Name);    
console.log(country); 

//* 3

const book = {
    title: "ვეფხისტყაოსანი",
    author: "შოთა რუსთაველი"
};

const { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle);
console.log(bookAuthor);

//* 4

const person = {
    name: "დავით",
    address: {
      city: "თბილისი",
      zip: "0105"
    }
};

const { address: { city } } = person;

console.log(city);