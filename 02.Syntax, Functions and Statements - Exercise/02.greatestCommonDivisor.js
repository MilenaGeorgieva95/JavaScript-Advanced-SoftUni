function greatestCommonDivisor(numOne, numTwo) {
    let GCD = numOne % numTwo;
    while (GCD !== 0) {
        numOne = numTwo;
        numTwo = GCD;
        GCD = numOne % numTwo
    }

    console.log(numTwo)
}

//(30)2*3*5
//(8)2*2*2
//30/8=6 8/6=2 6/2=0 2
