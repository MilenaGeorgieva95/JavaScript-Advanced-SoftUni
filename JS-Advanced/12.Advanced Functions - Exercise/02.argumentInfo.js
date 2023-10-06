function argumentInfo(...arg) {
  const obj = {};

  arg.forEach((el) => {
    let type = typeof el;
    console.log(`${type}: ${el}`);
    if (!obj.hasOwnProperty(type)) {
      obj[type] = 0;
    }
    obj[type] += 1;
  });

  const sortedResult = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let type of sortedResult) {
    console.log(`${type[0]} = ${type[1]}`);
  }
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
