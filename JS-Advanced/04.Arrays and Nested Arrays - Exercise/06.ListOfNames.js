function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    let num = 0;
    arr.forEach(el => {
        num++;
        console.log(num + '.' + el)
    })
}

listOfNames(["John", "Bob", "Christina", "Ema"])