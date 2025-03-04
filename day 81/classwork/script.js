function bonusTime(salary, bonus) {
    let result = 'Â£';
    if(bonus){
      result += salary * 10;
    }else {
      result += salary
    }
    return result;
}

var number=function(array){
    let result = [];
    for(let i = 0;i < array.length;i++){
      result.push((i + 1) +  ': ' + array[i]);
    }
    return result;
}

function sumMix(x){
    let total = 0;
    for(let i = 0; i < x.length;i++){
      total += Number(x[i]);
    }
    return total
}

function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return [min, max];
}