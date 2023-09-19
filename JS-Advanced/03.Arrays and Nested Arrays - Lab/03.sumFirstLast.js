function sumfirstLast(arr) {
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());
    let result = firstNum + lastNum
    return result
}

sumfirstLast(['20', '30', '40'])