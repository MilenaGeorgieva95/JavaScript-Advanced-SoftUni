function validityChecker(x1, y1, x2, y2) {

    let calcDistance = (a1, b1, a2, b2) => {
        let distance = Math.sqrt(Math.pow((a2 - a1), 2) + Math.pow((b2 - b1), 2));
        if (Number.isInteger(distance)) {
            return 'valid'
        }
        return 'invalid'
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${calcDistance(x1, y1, 0, 0)}`)

    console.log(`{${x2}, ${y2}} to {0, 0} is ${calcDistance(x2, y2, 0, 0)}`)

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${calcDistance(x1, y1, x2, y2)}`)
}

validityChecker(2, 1, 1, 1)