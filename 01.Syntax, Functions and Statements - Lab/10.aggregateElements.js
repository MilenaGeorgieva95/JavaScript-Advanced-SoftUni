function agregateElements(arr) {
  let sum = 0;
  let inverseSum = 0;
  let concatenation = "";

  for (let num of arr) {
    let curNum = Number(num);
    sum += curNum;
    inverseSum += 1 / curNum;
    concatenation += num;
  }
  console.log(sum);
  console.log(inverseSum);
  console.log(concatenation);
}

agregateElements([1, 2, 3]);
