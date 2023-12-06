const { expect } = require("chai");
const sum = require("./04.sumOfNumbers.js");

describe("Main tests", function () {
  it("takes array of numbers", () => {
    expect(sum([1, 1, 1])).to.equal(3);
  });
});
