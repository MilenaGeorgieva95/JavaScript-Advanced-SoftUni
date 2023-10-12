function figuresHierarchy() {
  class Figure {
    constructor() {
      this.units = "cm";
    }
    get area() {}
    changeUnits(units) {
      this.units = units;
    }
    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    get area() {
      return Math.pow(this.radius, 2) * Math.PI;
    }
    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
    }
    changeUnits(units) {
      if (this.units === units) {
        return;
      }

      switch (this.units) {
        case "m":
          switch (units) {
            case "cm":
              this.radius *= 100;
              break;
            case "mm":
              this.radius *= 1000;
              break;
          }
          break;
        case "cm":
          switch (units) {
            case "m":
              this.radius /= 100;
              break;
            case "mm":
              this.radius *= 10;
              break;
          }
          break;
        case "mm":
          switch (units) {
            case "m":
              this.radius /= 1000;
              break;
            case "cm":
              this.radius /= 10;
              break;
          }
          break;
      }
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super();
      this.width = width;
      this.height = height;
      this.units = units;
    }
    get area() {
      return this.width * this.height;
    }
    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }

    get units() {
      return this._units;
    }
    set units(units) {
      if (this._units === units) {
        return;
      }

      switch (this._units) {
        case "m":
          switch (units) {
            case "cm":
              this.width *= 100;
              this.height *= 100;
              break;
            case "mm":
              this.width *= 1000;
              this.height *= 1000;
              break;
          }
          break;
        case "cm":
          switch (units) {
            case "m":
              this.width /= 100;
              this.height /= 100;
              break;
            case "mm":
              this.width *= 10;
              this.height *= 10;
              break;
          }
          break;
        case "mm":
          switch (units) {
            case "m":
              this.width /= 1000;
              this.height /= 1000;
              break;
            case "cm":
              this.width /= 10;
              this.height /= 10;
              break;
          }
          break;
      }
      return (this._units = units);
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}

let classes = figuresHierarchy();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area);
console.log(c.toString());
let r = new Rectangle(3, 4, "mm");
console.log(r.area);
console.log(r.toString());
r.changeUnits("cm");
console.log(r.area);
console.log(r.toString());

c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
