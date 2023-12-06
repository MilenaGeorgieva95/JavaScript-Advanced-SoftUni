function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let length = Math.ceil(arr.length / 2);
    let result = arr.slice(-length);
    return result
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])