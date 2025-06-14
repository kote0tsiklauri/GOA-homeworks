const arr = ["Goa", "novatori", "step", "step"];

const result = arr.map(word => {
  const firstChar = word[0];

  if (firstChar === firstChar.toUpperCase()) {
    return "Good";
  } else {
    return "Bad";
  }
});




const numbers = [11, 3, 1, 5, 6, 2, 0, 13];

const filtered = numbers.filter(num => num > 5);

console.log(filtered);