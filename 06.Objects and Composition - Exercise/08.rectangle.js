function rectangle(width, height, color) {
  let capitalColor = color.substring(0, 1).toUpperCase() + color.substring(1);
  return {
    width,
    height,
    color: capitalColor,
    calcArea() {
      return this.width * this.height;
    },
  };
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
