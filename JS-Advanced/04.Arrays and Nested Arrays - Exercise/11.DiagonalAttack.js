function diagonalAttack(arr) {
    let matrix = arr.map(el =>
        el.split(' ').map(Number));

    let sumOne = 0
    let sumTwo = 0;
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumOne += matrix[i][counter];
        let num = matrix[i].length - 1 - counter
        sumTwo += matrix[i][num]
        counter++;
    }
    let index = 0;
    if (sumOne === sumTwo) {
        for (let j = 0; j < matrix.length; j++) {
            for (let k = 0; k < matrix[j].length; k++) {
                let indexTwo = matrix[j].length - 1 - index;
                if (k !== index && k !== indexTwo) {
                    matrix[j][k] = sumOne
                }
            }
            index++;
        }
    }
    matrix.forEach(el => console.log(el.join(' ')))

}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])