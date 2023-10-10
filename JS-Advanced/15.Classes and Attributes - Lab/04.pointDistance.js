class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));
