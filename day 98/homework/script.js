const sharePrice = (invested, changes) => {
    for (let i = 0; i < changes.length; i++) {
     invested += invested * (changes[i] / 100);
   }
   return invested.toFixed(2); 
 };
 

function nthChar(words){
let n=0
let result =''
for(let i=0;i<words.length;i++){
    result += words[i][n]
    n++
}
return result
}

function missingNo(nums) {
    let sort = nums.sort()
    let i =0
    while(nums.includes(i)){
      i++
    }
    return i
}

function betweenExtremes(numbers) {
    numbers.sort((a, b) => a - b); 
    return numbers[numbers.length - 1] - numbers[0]; 
}