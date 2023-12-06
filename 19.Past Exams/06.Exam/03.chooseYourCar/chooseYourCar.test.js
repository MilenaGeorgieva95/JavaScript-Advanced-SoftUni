const { expect } = require("chai");
const chooseYourCar = require("../chooseYourCar.js");

describe("Main Test", function () {
  describe("test1", () => {
    it("case1", () => {
      expect(() => {
        chooseYourCar.choosingType("Sedan", "red", 1899);
      }).to.throw("Invalid Year!");
    });
    it("case2", () => {
      expect(() => {
        chooseYourCar.choosingType("Sedan", "red", 2023);
      }).to.throw("Invalid Year!");
    });
    it("case3", () => {
      expect(() => {
        chooseYourCar.choosingType("Audi", "red", 1900);
      }).to.throw("This type of car is not what you are looking for.");
    });
    it("case4", () => {
      expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal(
        "This red Sedan meets the requirements, that you have."
      );
    });
  });

  describe("test2", () => {
    it("case1", () => {
      expect(chooseYourCar.choosingType("Sedan", "red", 2014)).to.equal(
        "This red Sedan meets the requirements, that you have."
      );
    });
    it("case2", () => {
      expect(chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal(
        "This Sedan is too old for you, especially with that red color."
      );
    });
    it("case3", () => {
      expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal(
        "BMW, Peugeot"
      );
    });
    it("case4", () => {
      expect(() => {
        chooseYourCar.brandName("BMW,Toyota, Peugeot", 1);
      }).to.throw("Invalid Information!");
    });
  });

  describe("test3", () => {
    it("case1", () => {
      expect(() => {
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "1");
      }).to.throw("Invalid Information!");
    });
    it("case2", () => {
      expect(() => {
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1);
      }).to.throw("Invalid Information!");
    });
    it("case3", () => {
      expect(() => {
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 5);
      }).to.throw("Invalid Information!");
    });
    it("case4", () => {
      expect(chooseYourCar.carFuelConsumption(1, 100)).to.equal(
        "The car burns too much fuel - 10000.00 liters!"
      );
    });
  });

  describe("test4", () => {
    it("case1", () => {
      expect(chooseYourCar.carFuelConsumption(1, 100)).to.equal(
        "The car burns too much fuel - 10000.00 liters!"
      );
    });
    it("case2", () => {
      expect(chooseYourCar.carFuelConsumption(1, 0.07)).to.equal(
        "The car is efficient enough, it burns 7.00 liters/100 km."
      );
    });
    it("case3", () => {
      expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal(
        "The car is efficient enough, it burns 6.00 liters/100 km."
      );
    });
    it("case4", () => {
      expect(() => {
        chooseYourCar.carFuelConsumption("1", 0.07);
      }).to.throw("Invalid Information!");
    });
  });

  describe("test5", () => {
    it("case1", () => {
      expect(() => {
        chooseYourCar.carFuelConsumption(1, "0.07");
      }).to.throw("Invalid Information!");
    });
    it("case2", () => {
      expect(() => {
        chooseYourCar.carFuelConsumption(-1, 0.07);
      }).to.throw("Invalid Information!");
    });
    it("case3", () => {
      expect(() => {
        chooseYourCar.carFuelConsumption(1, -0.07);
      }).to.throw("Invalid Information!");
    });
    it("case4", () => {
      expect(() => {
        chooseYourCar.carFuelConsumption(-1, -0.07);
      }).to.throw("Invalid Information!");
    });
  });
});
