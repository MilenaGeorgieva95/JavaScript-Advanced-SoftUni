function magicMatrices(arr) {
    let isMagical = true;
    let rowSum = arr[0].reduce((a, b) => a + b);
    let columnSum = 0;

    arr.forEach(row => {
        columnSum += row[0];
    });

    for (let counter1 = 0; counter1 < arr.length; counter1++) {
        let currentRow = arr[counter1].reduce((acc, item) => acc + item);

        let currentCol = 0;
        for (let counter2 = 0; counter2 < arr.length; counter2++) {
            let num = arr[counter2][counter1];
            currentCol += num;
        }
        if (currentRow !== rowSum || currentCol !== columnSum) {
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}

magicMatrices([[1, 0, 0],
[0, 0, 1]])