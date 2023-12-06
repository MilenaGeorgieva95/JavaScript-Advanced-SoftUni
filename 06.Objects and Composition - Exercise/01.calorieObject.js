function calorieObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = Number(arr[i + 1]);
  }
  return obj;
}

console.log(calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
