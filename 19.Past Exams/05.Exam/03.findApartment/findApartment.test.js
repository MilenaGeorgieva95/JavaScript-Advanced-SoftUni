const { expect } = require("chai");
const findNewApartment = require("../findApartment.js");

describe("Main Test", function () {
  describe("test1", () => {
    it("case1", () => {
      expect(findNewApartment.isGoodLocation("Abc", true)).to.equal(
        "This location is not suitable for you."
      );
    });
    it("case2", () => {
      expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(
        "There is no public transport in area."
      );
    });
    it("case3", () => {
      expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal(
        "There is no public transport in area."
      );
    });
    it("case4", () => {
      expect(findNewApartment.isGoodLocation("Varna", false)).to.equal(
        "There is no public transport in area."
      );
    });
  });

  describe("test2", () => {
    it("case1", () => {
      expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal(
        "You can go on home tour!"
      );
    });
    it("case2", () => {
      expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal(
        "You can go on home tour!"
      );
    });
    it("case3", () => {
      expect(findNewApartment.isGoodLocation("Varna", true)).to.equal(
        "You can go on home tour!"
      );
    });
    it("case4", () => {
      expect(() => {
        findNewApartment.isGoodLocation(["Varna"], false);
      }).to.throw("Invalid input!");
    });
  });

  describe("test3", () => {
    it("case1", () => {
      expect(() => {
        findNewApartment.isGoodLocation("Varna");
      }).to.throw("Invalid input!");
    });
    it("case2", () => {
      expect(() => {
        findNewApartment.isGoodLocation("Varna", "abc");
      }).to.throw("Invalid input!");
    });
    it("case3", () => {
      expect(() => {
        findNewApartment.isGoodLocation(5, true);
      }).to.throw("Invalid input!");
    });
    it("case4", () => {
      expect(findNewApartment.isLargeEnough([40, 50, 60], 45)).to.equal(
        "50, 60"
      );
    });
  });

  describe("test4", () => {
    it("case1", () => {
      expect(findNewApartment.isLargeEnough([40, 50, 60], 10)).to.equal(
        "40, 50, 60"
      );
    });
    it("case2", () => {
      expect(() => {
        findNewApartment.isLargeEnough("40, 50, 60", 10);
      }).to.throw("Invalid input!");
    });
    it("case3", () => {
      expect(() => {
        findNewApartment.isLargeEnough([40, 50, 60], "10");
      }).to.throw("Invalid input!");
    });
    it("case4", () => {
      expect(() => {
        findNewApartment.isLargeEnough([], 10);
      }).to.throw("Invalid input!");
    });
  });

  describe("test5", () => {
    it("case1", () => {
      expect(findNewApartment.isItAffordable(100, 10)).to.equal(
        "You don't have enough money for this house!"
      );
    });
    it("case2", () => {
      expect(findNewApartment.isItAffordable(10, 100)).to.equal(
        "You can afford this home!"
      );
    });
    it("case3", () => {
      expect(() => {
        findNewApartment.isItAffordable(0, 100);
      }).to.throw("Invalid input!");
    });
    it("case4", () => {
      expect(() => {
        findNewApartment.isItAffordable(100, 0);
      }).to.throw("Invalid input!");
    });
  });

  describe("test5", () => {
    it("case1", () => {
      expect(() => {
        findNewApartment.isItAffordable("100", 10);
      }).to.throw("Invalid input!");
    });
    it("case2", () => {
      expect(() => {
        findNewApartment.isItAffordable(10, "100");
      }).to.throw("Invalid input!");
    });
  });
});
