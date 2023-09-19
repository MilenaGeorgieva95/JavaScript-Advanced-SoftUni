function biggestElement(matrix) {
    let biggestNum = matrix[0][0]

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > biggestNum) {
                biggestNum = matrix[i][j]
            }
        }
    }
    return biggestNum
}

biggestElement([[20, 50, 10],
[8, 33, 145]])