function sortAnArr(arr) {
    arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b)
        }
        return a.length - b.length
    })
    console.log(arr.join('\n'))
}

sortAnArr(['alpha',
    'beta',
    'gamma'])