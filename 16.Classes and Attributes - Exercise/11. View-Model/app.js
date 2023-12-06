class Textbox {
  constructor(selector, regEx) {
    this.invalidSymbols = regEx;
    this.elements = document.querySelectorAll(selector);
    this.value = ``;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    let elementsToArray = Array.from(this.elements);

    for (let element of elementsToArray) {
      element.value = v;
    }
    this._value = v;
  }

  get elements() {
    return this._elements;
  }

  set elements(value) {
    this._elements = value;
  }

  get invalidSymbols() {
    return this._invalidSymbols;
  }

  set invalidSymbols(value) {
    this._invalidSymbols = value;
  }

  isValid() {
    let elementsToArray = Array.from(this.elements);

    for (let element of elementsToArray) {
      if (this.invalidSymbols.test(element.value)) {
        return false;
      }
    }
    return true;
  }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);

let inputs = document.querySelectorAll(".textbox");

inputs.forEach((input) => {
  input.addEventListener(`input`, () => {
    console.log(input.value);
  });
});
