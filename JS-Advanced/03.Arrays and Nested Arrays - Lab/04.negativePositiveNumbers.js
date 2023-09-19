function negativePositiveNumbers(arr) {
    let resultArr = [];
    for (let el of arr) {
        if (el >= 0) {
            resultArr.push(el)
        } else {
            resultArr.unshift(el)
        }
    }
    resultArr.forEach(el => console.log(el))
}

negativePositiveNumbers([7, -2, 8, 9])