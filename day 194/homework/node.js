// Big O notation is a way to describe how fast or efficient an algorithm is as the amount of data
// grows.it shows how the runtime or memory usage changes with input size

// - O(1)
// - O(log n)
// - O(n)
// - O(n log n)
// - O(n²)
// - O(2^n)
// - O(n!)

for(let i = 0; i < n; i++) {
    console.log(i);
}
// This loop runs n times so the time complexity is O(n)

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
// This nested loop runs n * n times so the time complexity is O(n²)

let i = 1;

while(i < n) {
    console.log(i);
    i *= 2;
}
// This loop runs log₂(n) times so the time complexity is O(log n)

for(let i = 0; i < n; i++) {
    console.log(i);
}

for(let j = 0; j < n; j++) {
    console.log(j);
}

// These two separate loops each run n times so the total time complexity is O(n + n) = O(2n) = O(n)

for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
        console.log(i, j);
    }
}

// This nested loop runs O(n²) times

console.log("Hello, World!");
// This is a constant time operation so the time complexity is O(1)


let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// This loop runs arr.length times, which is n so the time complexity is O(n)


let maxArr = [1, 21, 23, 44, 15];
let max = maxArr[0];
for(let i = 1; i < maxArr.length; i++) {
    if(maxArr[i] > max) {
        max = maxArr[i];
    }
}
console.log(max);
// This loop runs n times so the time complexity is O(n)