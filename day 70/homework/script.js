function createMatrix(rows, cols) {
    let matrix = [];
    let num = 1;

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = num++;
        }
    }

    return matrix;
}
