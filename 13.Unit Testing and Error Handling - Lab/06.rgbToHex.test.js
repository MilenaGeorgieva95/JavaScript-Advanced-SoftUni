const { expect } = require("chai");
const rgbToHexColor = require("./06.rgbToHex.js");

describe("RGBtoHexColor", () => {
  it("converts black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("converts white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("converts SoftUni blue to #234465", () => {
    expect(rgbToHexColor(35, 68, 101)).to.equal("#234465");
  });

  it("converts 15, 15, 15 to #0F0F0F", () => {
    expect(rgbToHexColor(15, 15, 15)).to.equal("#0F0F0F");
  });

  it("return undefined for missing params", () => {
    expect(rgbToHexColor(0, 0)).to.undefined;
    expect(rgbToHexColor(0)).to.undefined;
    expect(rgbToHexColor()).to.undefined;
  });

  it("return undefined for out of lower bound", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.undefined;
  });

  it("return undefined for out of upper bound", () => {
    expect(rgbToHexColor(256, 0, 0)).to.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.undefined;
  });

  it("return undefined for floats", () => {
    expect(rgbToHexColor(1.1, 0, 0)).to.undefined;
    expect(rgbToHexColor(0, 1.1, 0)).to.undefined;
    expect(rgbToHexColor(0, 0, 1.1)).to.undefined;
  });

  it("return undefined for strings", () => {
    expect(rgbToHexColor("1", 0, 0)).to.undefined;
    expect(rgbToHexColor(0, "1", 0)).to.undefined;
    expect(rgbToHexColor(0, 0, "1")).to.undefined;
  });
});
