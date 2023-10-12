function balloons() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWight, ribbonColor, ribbonLength) {
      super(color, gasWight);
      this.ribbon = { color: ribbonColor, length: ribbonLength };
    }
    get ribbon() {
      return this._ribbon;
    }
    set ribbon({ color, length }) {
      this._ribbon = { color: color, length: length };
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWight, ribbonColor, ribbonLength, text) {
      super(color, gasWight, ribbonColor, ribbonLength);
      this.text = text;
    }

    get text() {
      return this._text;
    }
    set text(text) {
      this._text = text;
    }
  }
  return {
    Balloon: Balloon,
    PartyBalloon: PartyBalloon,
    BirthdayBalloon: BirthdayBalloon,
  };
}

let classes = balloons();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);

let classes1 = balloons();

let test = new classes1.Balloon("Tumno-bqlo", 20.5);

console.log(test.gasWeight);
