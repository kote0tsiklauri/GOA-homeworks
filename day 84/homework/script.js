//! 1

function findMultiples(integer, limit) {
    let result = [];
    for (let i = 1; i * integer <= limit; i++) {
      result.push(i * integer);
    }
    return result;
}

//! 2
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return [];
    }
  
    let positive = 0;
    let sumNegative = 0;
    let result = [];
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positive += 1;
      } else {
        sumNegative += input[i];
      }
    }
  
    result.push(positive);
    result.push(sumNegative);
  
    return result;
}


//! 3
function sameCase(a, b) {
    
    if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
        return -1; 
    }

    
    if ((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())) {
        return 1; 
    }

    return 0; 
}