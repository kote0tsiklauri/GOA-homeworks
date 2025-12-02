let arr = [2, 3, 4];
arr.unshift(1);  
console.log(arr);  

let arr2 = [1, 2, 3];
let removed = arr2.shift();  
console.log(arr2);  
console.log(removed);  

let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 2);  
console.log(arr3);  

let arr4 = [1, 2, 3, 4, 5];
let newArr = arr4.slice(1, 3);  
console.log(newArr);  

let arr5 = [1, 2];
let arr6 = [3, 4];
let newArr2 = arr5.concat(arr6);  
console.log(newArr2);  

let arr7 = [4, 2, 5, 1, 3];
arr7.sort();  
console.log(arr7);  

let arr8 = [1, 2, 3, 4];
arr8.reverse();  
console.log(arr8);  

let arr9 = ['a', 'b', 'c'];
let str = arr9.join('-');  
console.log(str);  