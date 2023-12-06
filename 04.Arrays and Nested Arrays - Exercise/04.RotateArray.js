function rotateArr(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let el = arr.pop();
        arr.unshift(el)
    }
    console.log(arr.join(' '))
}

rotateArr(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)