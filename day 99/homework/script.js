const sharePrice = (invested, changes) => {
    for (let i = 0; i < changes.length; i++) {
     invested += invested * (changes[i] / 100);
   }
   return invested.toFixed(2); 
};

function isSquare(n) {
    if (n < 0) {
        return false;
    }
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}

function descendingOrder(n){
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
  }


