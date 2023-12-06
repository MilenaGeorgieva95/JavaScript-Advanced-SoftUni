// function extractFromArr(arr) {
//     let result = [];
//     let biggestNum = arr[0]
//     arr.forEach(el => {
//         if (el >= biggestNum) {
//             result.push(el);
//             biggestNum = el;
//         }
//     })
//     return result
// }

function extractFromArr(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    return arr.reduce((acc, el) => {
        if (el >= biggestNum) {
            biggestNum = el;
            acc.push(el)
        }
        return acc
    }, [])

}

console.log(extractFromArr([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))