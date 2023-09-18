function mathOperations(numOne, numTwo, str) {
  let result;
  switch (str) {
    case "+":
      result = numOne + numTwo;
      break;
    case "-":
      result = numOne - numTwo;
      break;
    case "/":
      result = numOne / numTwo;
      break;
    case "*":
      result = numOne * numTwo;
      break;
    case "%":
      result = numOne % numTwo;
      break;
    case "**":
      result = numOne ** numTwo;
  }
  console.log(result);
}
