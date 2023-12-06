const { expect } = require("chai");
const PaymentPackage = require("./12.paymentPackage.js");

const myPack = new PaymentPackage("abc", 10);
console.log(myPack.toString());

describe("Main Test", function () {
  let paymentPack;
  beforeEach(() => {
    paymentPack = new PaymentPackage("abcd", 10);
  });
  it("Accessor name - used to get and set the value of the name", () => {
    expect(paymentPack._name).to.equal("abcd");
    paymentPack.name = "Dcba";
    expect(paymentPack._name).to.equal("Dcba");
    paymentPack.name = "10";
    expect(paymentPack._name).to.equal("10");
  });
  it("Accessor value - used to get and set the value of value", () => {
    expect(paymentPack._value).to.equal(10);
    paymentPack.value = 5;
    expect(paymentPack._value).to.equal(5);
    paymentPack.value = 0;
    expect(paymentPack._value).to.equal(0);
  });
  it("Accessor VAT - used to get and set the value of VAT", () => {
    expect(paymentPack._VAT).to.equal(20);
    paymentPack.VAT = 10;
    expect(paymentPack._VAT).to.equal(10);
    paymentPack.VAT = 0;
    expect(paymentPack._VAT).to.equal(0);
  });
  it("Accessor active - used to get and set the value of active", () => {
    expect(paymentPack._active).to.equal(true);
    paymentPack.active = false;
    expect(paymentPack._active).to.equal(false);
    paymentPack.active = true;
    expect(paymentPack._active).to.equal(true);
  });
  it("Function toString() - return a string, containing an overview of the instance; if the package is not active, append the label (inactive) to the printed name", () => {
    let buff1 = [
      `Package: abcd` + "",
      `- Value (excl. VAT): 10`,
      `- Value (VAT 20%): 12`,
    ];
    expect(paymentPack.toString()).to.equal(buff1.join("\n"));
    paymentPack.active = false;
    let buff2 = [
      `Package: abcd (inactive)`,
      `- Value (excl. VAT): 10`,
      `- Value (VAT 20%): 12`,
    ];
    expect(paymentPack.toString()).to.equal(buff2.join("\n"));
  });

  describe("If any of the requirements arent met, the operation must throw an error.", () => {
    it("name - non-empty string", () => {
      expect(() => {
        new PaymentPackage("", 9);
      }).to.throws;
      expect(() => {
        new PaymentPackage(["abc"], 9);
      }).to.throws;
      expect(() => {
        new PaymentPackage(10, 9);
      }).to.throws;
    });
    it("value - non-negative number", () => {
      expect(() => {
        new PaymentPackage("abc", -1);
      }).to.throws;
      expect(() => {
        new PaymentPackage("abc", "12");
      }).to.throws;
      expect(() => {
        new PaymentPackage("abc", 1.2);
      }).to.throws;
      expect(() => {
        new PaymentPackage("abc", [1.2]);
      }).to.throws;
      expect(() => {
        new PaymentPackage("abc", "");
      }).to.throws;
    });
    it("VAT - non-negative number", () => {
      let newPack = new PaymentPackage("abc", 10);
      expect(() => {
        newPack.value = -1;
      }).to.throws;
      expect(() => {
        newPack.value = "12";
      }).to.throws;
      expect(() => {
        newPack.value = 1.2;
      }).to.throws;
      expect(() => {
        newPack.value = "";
      }).to.throws;
    });
    it("active - Boolean", () => {
      let newPack = new PaymentPackage("abc", 10);
      expect(() => {
        newPack.active = -1;
      }).to.throws;
      expect(() => {
        newPack.active = "12";
      }).to.throws;
      expect(() => {
        newPack.active = 1.2;
      }).to.throws;
      expect(() => {
        newPack.active = [1.2];
      }).to.throws;
      expect(() => {
        newPack.active = "false";
      }).to.throws;
      expect(() => {
        newPack.active = "";
      }).to.throws;
    });
  });
});
