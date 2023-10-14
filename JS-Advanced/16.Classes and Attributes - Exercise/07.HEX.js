class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }
  toString() {
    return "0x" + this.value.toString(16).toUpperCase();
  }
  plus(num) {
    let newValue;
    if (num instanceof Hex) {
      newValue = this.value + num.value;
    } else {
      newValue = this.value + num;
    }
    return new Hex(newValue);
  }
  minus(num) {
    let newValue;
    if (typeof num === "object") {
      newValue = this.value - num.value;
    } else {
      newValue = this.value - num;
    }
    return new Hex(newValue);
  }
  parse(string) {
    return parseInt(string, 16).toString(10);
  }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
