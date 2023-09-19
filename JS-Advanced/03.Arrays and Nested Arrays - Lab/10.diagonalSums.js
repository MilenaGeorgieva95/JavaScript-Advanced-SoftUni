function diagonalSums(matrix) {
    let diagonalOne = 0;
    let diagonalTwo = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1

    matrix.forEach(row => {
        diagonalOne += row[firstIndex++];
        diagonalTwo += row[secondIndex--];
    })

    console.log(diagonalOne + ' ' + diagonalTwo)
}

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])