function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Yes";
    } else {
        // Find the closest leap year
        let closestLeapYear = year - (year % 4);
        if (closestLeapYear % 100 === 0 && closestLeapYear % 400 !== 0) {
            closestLeapYear -= 4; 
        }
        return `${year} - No, closest leap year: ${closestLeapYear}`;
    }
}


function digitSum(n) {
    let total = 0;
    while (n > 0) {
        total += n % 10;
        n = (n / 10) - ((n % 10) / 10);
    }
    return total;
}

console.log(digitSum(123))