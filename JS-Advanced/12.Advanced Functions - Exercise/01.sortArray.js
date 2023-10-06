function sortArray(arr, value) {
  return value == "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}

console.log(sortArray([10, 8, 5, 7, 9, 6], "desc"));
