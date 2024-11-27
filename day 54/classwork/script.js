function comereson(num1,num2){
    if (num1 > num2){
        return true
    }
    return false
}


console.log(comereson(3,2))



// ------------------------------------------
function inTheMidle(num1,num2,num3){
    if (num1 < num3 && num2 > num3){
        return true
    }
    return false
}

console.log(inTheMidle(2,5,6))



// ----------------------------------------------
function firstAndSecond(str1,str2){
    return str1[0] === str2[1]
}

console.log(firstAndSecond("dd","dk"))




// -----------------------------------
function func(arg){
    if (typeof(arg) === 'string'){
        return arg.length
    }
    else if (typeof(arg) === 'number'){
        return arg > 100
    }
    else if (typeof(arg) === 'boolean'){
        return !arg
    }
}


console.log(func(114))
console.log(func('kk'))
console.log(func(true))
