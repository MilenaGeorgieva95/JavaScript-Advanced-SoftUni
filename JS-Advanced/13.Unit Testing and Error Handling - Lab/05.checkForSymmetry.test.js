const { expect } = require("chai");
const isSymmetric = require("./05.checkForSymmetry.js");

describe("Main tests", function () {
  it("takes array as argument", () => {
    expect(isSymmetric([1, 1, 1])).to.equal(true);
  });
  it("takes array as argument", () => {
    expect(isSymmetric(["abc", "bca", "abc"])).to.equal(true);
  });
  it("takes array as argument", () => {
    expect(isSymmetric([])).to.equal(true);
  });
  it("returns false for incorrect type input", () => {
    expect(isSymmetric("121")).to.equal(false);
  });
  it("returns false for incorrect type input", () => {
    expect(isSymmetric([1, 2, 3, "2", "1"])).to.equal(false);
  });
});
