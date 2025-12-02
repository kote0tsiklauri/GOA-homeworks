function calculate(a, b, callback) {
    return callback(a, b);
}
  
function customFilter(arr, callback) {
    let result = [];
    for (let item of arr) {
      if (callback(item)) {
        result.push(item);
      }
    }
    return result;
}
  
function customMap(arr, callback) {
    let result = [];
    for (let item of arr) {
      result.push(callback(item));
    }
    return result;
}
  
function steps() {
    setTimeout(() => {
      "ნაბიჯი 1";
      setTimeout(() => {
        "ნაბიჯი 2";
        setTimeout(() => {
          "ნაბიჯი 3";
        }, 1000);
      }, 1000);
    }, 1000);
}