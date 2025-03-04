function digitSum(n) {
    let total = 0;
    while (n > 0) {
        total += n % 10;
        n = (n / 10) - ((n % 10) / 10);
    }
    return total;
}

console.log(digitSum(123))


function multiTable(number) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      let sum = i * number;
      result += `${i} * ${number} = ${sum}\n`;
    }
}