function sameNumbers(num) {
    let areSame = true;
    let sum = 0;

    num.toString()
        .split('')
        .forEach((x, i, self) => {
            if (x !== self[0]) {
                areSame = false;
            }
            sum += Number(x)
        })

    console.log(areSame)
    console.log(sum)
}

sameNumbers(1234)
