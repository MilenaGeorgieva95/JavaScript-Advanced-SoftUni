function orbit(data) {
    let [width, heigth, starX, starY] = data;
    let matrix = []

    for (let i = 0; i < heigth; i++) {
        let row = []
        for (let j = 0; j < width; j++) {
            let curCell = Math.max(Math.abs(j - starY), Math.abs(i - starX)) + 1
            row.push(curCell)
        }
        matrix.push(row)
    }
    matrix.forEach(el => console.log(el.join(' ')))
}

orbit([5, 5, 2, 2])