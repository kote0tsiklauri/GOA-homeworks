function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
}

//! filter

function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
}

//! reduce

function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;
  
    if (initialValue === undefined) {
      accumulator = array[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
}

//* 8

const students = [
    { name: "ანა", score: 85 },
    { name: "გიორგი", score: 92 },
    { name: "მარიამი", score: 78 },
    { name: "ლუკა", score: 95 },
    { name: "ნინო", score: 88 }
];
  
const topStudents = students.filter(student => student.score > 90);

console.log(topStudents);

//* 9
const cart = [
    { name: "ვაშლი", price: 2, quantity: 3 },
    { name: "ბანანი", price: 1, quantity: 5 },
    { name: "ფორთოხალი", price: 3, quantity: 2 }
];
  
const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);

console.log("საერთო ღირებულება:", total);