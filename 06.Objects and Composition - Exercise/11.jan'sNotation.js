function jansNotation(input) {
  let nums = [];
  let operationsFunc = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  for (let el of input) {
    if (typeof el === "number") {
      nums.push(el);
    } else {
      if (nums.length < 2) {
        console.log("Error: not enough operands!");
        return;
      }
      let nextNum = nums.pop();
      let curNum = nums.pop();
      let newNum = operationsFunc[el](curNum, nextNum);
      nums.push(newNum);
    }
  }

  if (nums.length > 1) {
    console.log("Error: too many operands!");
    return;
  } else {
    console.log(nums[0]);
  }
}

jansNotation([31, 2, "+", 11, "/"]);
jansNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);
