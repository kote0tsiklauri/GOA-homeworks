function evenNumbers(matrix){
    let evenNumber = [];
    for(let i=0;i < matrix.length;i++){
        for(let j=0;j < matrix[i].length;j++){
            if (matrix[i][j] % 2 ==0){
                evenNumber.push(matrix[i][j])
            }
        }
    }
    return evenNumber
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(evenNumbers(matrix))