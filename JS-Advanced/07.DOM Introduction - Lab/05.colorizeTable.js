function colorize() {
  let elements = document.querySelectorAll("table tr:nth-child(even)");

  for (let item of elements) {
    item.style.background = "teal";
  }
}
