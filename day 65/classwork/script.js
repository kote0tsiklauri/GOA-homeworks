function func(string){
    result = [];
    for (let i = 0;i < string.length;i++) {
        i = Number(string[i])
        result.push(i)
    }
    return result
}