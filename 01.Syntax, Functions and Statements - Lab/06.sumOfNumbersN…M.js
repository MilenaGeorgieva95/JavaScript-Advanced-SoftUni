function sumOfNumbersNtoM(n, m) {
  let numN = Number(n);
  let numM = Number(m);
  let sum = 0;
  for (let i = numN; i <= numM; i++) {
    sum += i;
  }
  return sum;
}
