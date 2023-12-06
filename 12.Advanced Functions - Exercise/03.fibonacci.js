function fibonacci() {
  let curNum = 0;
  let nextNum = 1;

  function fibonator() {
    let sum = curNum + nextNum;
    curNum = nextNum;
    nextNum = sum;
    return curNum;
  }
  return fibonator;
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
