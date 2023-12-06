const { expect } = require("chai");
const lottery = require("../03.lottery.js");

describe("Main Test", function () {
  describe("test1", () => {
    it("case1", () => {
      expect(() => {
        lottery.buyLotteryTicket(10, 10, false);
      }).to.throw("Unable to buy lottery ticket!");
    });
    it("case2", () => {
      expect(lottery.buyLotteryTicket(2, 1, true)).to.equal(
        `You bought 1 tickets for 2$.`
      );
    });
    it("case3", () => {
      expect(() => {
        lottery.buyLotteryTicket("", 10, true);
      }).to.throw("Invalid input!");
    });
    it("case3.1", () => {
      expect(() => {
        lottery.buyLotteryTicket(10, "", true);
      }).to.throw("Invalid input!");
    });
    it("case4", () => {
      expect(() => {
        lottery.buyLotteryTicket(0, 10, true);
      }).to.throw("Invalid input!");
    });
    it("case4.1", () => {
      expect(() => {
        lottery.buyLotteryTicket(10, 10);
      }).to.throw("Invalid input!");
    });
    it("4.2", () => {
      expect(() => {
        lottery.buyLotteryTicket(10, 0, true);
      }).to.throw("Invalid input!");
    });
  });

  describe("test2", () => {
    it("case1", () => {
      expect(() => {
        lottery.checkTicket(5, [1, 2, 3, 4, 5, 6]);
      }).to.throw("Invalid input!");
    });
    it("case2", () => {
      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], 5);
      }).to.throw("Invalid input!");
    });
    it("case3", () => {
      expect(() => {
        lottery.checkTicket([1, 2, 3, 4, 5, 6], "123456");
      }).to.throw("Invalid input!");
    });
    it("case4", () => {
      expect(() => {
        lottery.checkTicket("123456", [1, 2, 3, 4, 5, 6]);
      }).to.throw("Invalid input!");
    });
  });

  describe("test3", () => {
    it("case1", () => {
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])
      ).to.equal("Congratulations you win, check your reward!");
    });
    it("case2", () => {
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 9])
      ).to.equal("Congratulations you win, check your reward!");
    });
    it("case3", () => {
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
      ).to.equal("You win the JACKPOT!!!");
    });
    it("case4", () => {
      expect(
        lottery.checkTicket([1, 2, 2, 2, 2, 2], [1, 2, 2, 2, 2, 2])
      ).to.equal(undefined);
    });
  });

  describe("test4", () => {
    it("case1", () => {
      expect(lottery.secondChance(5, [1, 2, 3])).to.equal(
        "Sorry, your ticket didn't win!"
      );
    });
    it("case2", () => {
      expect(lottery.secondChance(0, [0, 2, 3])).to.equal(
        "You win our second chance prize!"
      );
    });
    it("case3", () => {
      expect(lottery.secondChance(5, [1, 2, 3, 4, 6, 7, 8])).to.equal(
        "Sorry, your ticket didn't win!"
      );
    });
    it("case4", () => {
      expect(lottery.secondChance(5, [0, 2, 3, 5, 3, 1])).to.equal(
        "You win our second chance prize!"
      );
    });
  });
});
