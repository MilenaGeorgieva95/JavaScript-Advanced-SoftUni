function equalNeighbors(matrix) {
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let curEl = matrix[i][j];
            if (i + 1 < matrix.length && matrix[i + 1][j] === curEl) {
                counter++;
            }
            if (j + 1 < matrix[i].length && matrix[i][j + 1] === curEl) {
                counter++;
            }
        }
    }
    return counter
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])