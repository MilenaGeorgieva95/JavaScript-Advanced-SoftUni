function cookingByNumbers(numStr, op1, op2, op3, op4, op5) {
    let num = Number(numStr);
    let arr = [op1, op2, op3, op4, op5];
    let operationsObj = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x += 1,
        bake: x => x *= 3,
        fillet: x => x *= 0.8
    }

    for (let operation of arr) {
        num = operationsObj[operation](num);
        console.log(num);
    }

    // for (let i = 0; i < arr.length; i++) {
    //     switch (arr[i]) {
    //         case 'chop': num /= 2; break;
    //         case 'dice': num = Math.sqrt(num); break;
    //         case 'spice': num++; break;
    //         case 'bake': num *= 3; break;
    //         case 'fillet': num *= 0.8; break;
    //     }
    //     console.log(num)
    // }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
