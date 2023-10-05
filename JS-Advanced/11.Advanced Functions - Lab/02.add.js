function add(num) {
  return (secondNum) => {
    return num + secondNum;
  };
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));
