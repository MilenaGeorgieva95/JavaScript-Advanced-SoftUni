const { expect } = require("chai");
const lookupChar = require("./03.charLookup.js");

describe("Main Test", function () {
  it("If the first parameter is NOT a string or the second parameter is NOT a number - return undefined", () => {
    expect(lookupChar(1, "a")).to.equal(undefined);
    expect(lookupChar("ac", "ab")).to.equal(undefined);
    expect(lookupChar(["abc"], 3)).to.equal(undefined);
    expect(lookupChar(2, ["1"])).to.equal(undefined);
    expect(lookupChar({ a: "abc" }, 3)).to.equal(undefined);
    expect(lookupChar(2, { b: "1" })).to.equal(undefined);
    expect(lookupChar("abc", "3")).to.equal(undefined);
    expect(lookupChar("abc", 0.9)).to.equal(undefined);
  });

  it('If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index".', () => {
    expect(lookupChar("a", 1)).to.equal("Incorrect index");
    expect(lookupChar("abcdac", 6)).to.equal("Incorrect index");
    expect(lookupChar("abc", -1)).to.equal("Incorrect index");
    expect(lookupChar("abc", -10)).to.equal("Incorrect index");
    expect(lookupChar("abc", 3)).to.equal("Incorrect index");
    expect(lookupChar("abc", 10)).to.equal("Incorrect index");
  });

  it("If both parameters have correct types and values - return the character at the specified index in the string.", () => {
    expect(lookupChar("abcd", 0)).to.equal("a");
    expect(lookupChar("abcd", 3)).to.equal("d");
    expect(lookupChar("abcdef", 0)).to.equal("a");
    expect(lookupChar("abcdef", 5)).to.equal("f");
    expect(lookupChar("abcd", 2)).to.equal("c");
  });
});
