function processOddPositions(arr) {
    const oddArr = arr.filter((el, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ')
    return oddArr
}

processOddPositions([10, 15, 20, 25])