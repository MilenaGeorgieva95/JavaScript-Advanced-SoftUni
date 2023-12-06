function spiralMatrix(rowsCount, colsCount) {
    let matrix = [];
    for (let i = 0; i < rowsCount; i++) {
        matrix[i] = [];
        for (let j = 0; j < colsCount; j++) {
            matrix[i][j] = 0;
        }
    }

    let start = 0;
    let end = rowsCount - 1;
    let left = 0;
    let right = colsCount - 1;

    let index = 1;
    let direction = 0;

    while (start <= end && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let k = left; k <= right; k++) {
                    matrix[start][k] = index;
                    index++;
                }
                start++;
                break;

            case 1:
                for (let l = start; l <= end; l++) {
                    matrix[l][right] = index;
                    index++;
                }
                right--;
                break;

            case 2:
                for (let m = right; m >= left; m--) {
                    matrix[end][m] = index;
                    index++;
                }
                end--;
                break;

            case 3:
                for (let n = end; n >= start; n--) {
                    matrix[n][left] = index;
                    index++;
                }
                left++;
                break;
        }
        direction++;
    }
    console.log(matrix.map((el) => el.join(" ")).join("\n"));
}


data(5, 5)