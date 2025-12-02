function oddCount(n) {
    return Math.floor(n / 2);
}

function smallEnough(array, limit) {
    let result = true;
    for (let i of array) {
        if (i > limit) {
            result = false;
            break;
        }
    }
    return result;
}


function openOrSenior(data) {
    let result = [];
    for (let i of data) {
        if (i[0] >= 55 && i[1] > 7) {
            result.push("Senior");
        } else {
            result.push("Open");
        }
    }
    return result;
}

