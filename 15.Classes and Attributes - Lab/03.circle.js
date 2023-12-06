class Circle {
  constructor(radius) {
    this.radius = radius;
    this.diameter = radius * 2;
  }

  get diameter() {
    return this._diameter;
  }
  set diameter(num) {
    this.radius = num / 2;
    this._diameter = num;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
