const { assert } = require("chai");
const isOddOrEven = require("./02.evenOrOdd.js");

describe("Main test", function () {
  it("accepts only strings", () => {
    assert.equal(isOddOrEven(1), undefined, "return value must be undefined");
    assert.equal(
      isOddOrEven(["1"]),
      undefined,
      "return value must be undefined"
    );
  });
  describe("Odd-Even test", function () {
    it("returns Even", () => {
      assert.equal(isOddOrEven("baba"), "even", "1return value must be Even");
      assert.equal(isOddOrEven("abab"), "even", "2return value must be Even");
    });
    it("returns Odd", () => {
      assert.equal(isOddOrEven("babab"), "odd", "1return value must be Even");
      assert.equal(isOddOrEven("aba"), "odd", "2return value must be Odd");
    });
  });
  describe("Bomb test", function () {
    it("returns Even", () => {
      assert.equal(
        isOddOrEven("abcdabcd"),
        "even",
        "1return value must be Even"
      );
      assert.equal(isOddOrEven("ab"), "even", "2return value must be Even");
    });
    it("returns Odd", () => {
      assert.equal(isOddOrEven("abcdabc"), "odd", "1return value must be Even");
      assert.equal(isOddOrEven("a"), "odd", "2return value must be Odd");
    });
  });
});
