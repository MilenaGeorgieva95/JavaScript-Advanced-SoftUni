const { expect } = require("chai");
const createCalculator = require("./07.addSubstract.js");

describe("createCalculator Tests", function () {
  it("Keeps the internal sum with add", () => {
    const calc1 = createCalculator();
    calc1.add(1);
    const calc2 = createCalculator();
    calc2.add(2);
    expect(calc1.get()).to.equal(1);
    expect(calc2.get()).to.equal(2);
  });
  it("Keeps the internal sum with subtract", () => {
    const calc1 = createCalculator();
    calc1.subtract(1);
    const calc2 = createCalculator();
    calc2.subtract(2);
    expect(calc1.get()).to.equal(-1);
    expect(calc2.get()).to.equal(-2);
  });
  it("Keeps the internal sum with add and subtract", () => {
    const calc1 = createCalculator();
    calc1.add(2);
    calc1.subtract(1);
    const calc2 = createCalculator();
    calc2.add(1);
    calc2.add(3);
    calc2.subtract(2);
    expect(calc1.get()).to.equal(1);
    expect(calc2.get()).to.equal(2);
  });
  it("it takes number or string as params", () => {
    const calc1 = createCalculator();
    calc1.add("2");
    calc1.subtract("1");
    expect(calc1.get()).to.equal(1);
  });
  describe("does not take invalid params", function () {
    it("empty string", () => {
      const calc1 = createCalculator();
      calc1.add("");
      expect(calc1.get()).to.equal(0);
    });
    it("empty string", () => {
      const calc1 = createCalculator();
      calc1.subtract("");
      expect(calc1.get()).to.equal(0);
    });
    it("string", () => {
      const calc1 = createCalculator();
      calc1.add("abc");
      expect(calc1.get()).to.equal(0);
    });
    it("string", () => {
      const calc1 = createCalculator();
      calc1.subtract("abc");
      expect(calc1.get()).to.equal(0);
    });
  });
});
