function lastKNumbersSequence(count, back) {
    let arr = [1]
    for (let i = 1; i < count; i++) {
        let el = 0
        for (let j = i - back; j < i; j++) {
            if (j >= 0) {
                el += arr[j]
            }
        }
        arr.push(el)
    }
    return arr
}

lastKNumbersSequence(6, 3)