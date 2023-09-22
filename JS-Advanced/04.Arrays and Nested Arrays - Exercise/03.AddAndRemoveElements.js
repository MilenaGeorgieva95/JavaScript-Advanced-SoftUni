function addRemoveElements(arr) {
    let result = [];
    let counter = 0;
    arr.forEach(el => {
        counter++;
        if (el === 'add') {
            return result.push(counter);
        }
        return result.length > 0 && result.pop()
    })
    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty')
}


addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])