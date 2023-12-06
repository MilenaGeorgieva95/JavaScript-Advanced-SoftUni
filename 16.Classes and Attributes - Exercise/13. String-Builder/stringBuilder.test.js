const { expect } = require("chai");
const StringBuilder = require("../stringBuilder");

describe("Main Test", function () {
  let myStringBuilder;
  let myStringBuilder1;
  beforeEach(function () {
    myStringBuilder = new StringBuilder("abcefg");
    myStringBuilder1 = new StringBuilder();
  });
  describe("test1", () => {
    it("case0", () => {
      expect(() => {
        new StringBuilder(123);
      }).to.throw("Argument must be a string");
    });
    it("case1", () => {
      expect(myStringBuilder.toString()).to.equal("abcefg");
      expect(myStringBuilder1.toString()).to.equal("");
    });
    it("case2", () => {
      myStringBuilder.append("123");
      myStringBuilder1.append("123");
      expect(myStringBuilder.toString()).to.equal("abcefg123");
      expect(myStringBuilder1.toString()).to.equal("123");
    });
    it("case3", () => {
      myStringBuilder.prepend("123");
      myStringBuilder1.prepend("123");
      expect(myStringBuilder.toString()).to.equal("123abcefg");
      expect(myStringBuilder1.toString()).to.equal("123");
    });
    it("case4", () => {
      myStringBuilder.insertAt("123", 0);
      myStringBuilder1.insertAt("123", 0);
      expect(myStringBuilder.toString()).to.equal("123abcefg");
      expect(myStringBuilder1.toString()).to.equal("123");
    });
  });

  describe("test2", () => {
    it("case1", () => {
      myStringBuilder.insertAt("123", 2);
      expect(myStringBuilder.toString()).to.equal("ab123cefg");
    });
    it("case2", () => {
      myStringBuilder.insertAt("123", 6);
      expect(myStringBuilder.toString()).to.equal("abcefg123");
    });
    it("case3", () => {
      myStringBuilder.remove(0, 2);
      myStringBuilder1.remove(0, 0);
      expect(myStringBuilder.toString()).to.equal("cefg");
      expect(myStringBuilder1.toString()).to.equal("");
    });
    it("case4", () => {
      myStringBuilder.remove(2, 0);
      expect(myStringBuilder.toString()).to.equal("abcefg");
    });
    it("case5", () => {
      myStringBuilder.remove(2, 2);
      expect(myStringBuilder.toString()).to.equal("abfg");
    });
    it("case6", () => {
      myStringBuilder.remove(5, 1);
      expect(myStringBuilder.toString()).to.equal("abcef");
    });
    it("case7", () => {
      myStringBuilder.append("qz");
      myStringBuilder.prepend("qz");
      myStringBuilder.insertAt("qz", 2);
      myStringBuilder.insertAt("qz", 1);
      myStringBuilder.remove(1, 1);
      myStringBuilder.append("qz");
      myStringBuilder.prepend("qz");
      myStringBuilder.insertAt("qz", 2);
      myStringBuilder.insertAt("qz", 1);
      myStringBuilder.remove(1, 1);
      expect(myStringBuilder.toString()).to.equal("qzzqzqzzqzabcefgqzqz");
    });
  });

  describe("test3", () => {
    it("case1", () => {
      expect(() => {
        myStringBuilder.append(123);
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.append(123);
      }).to.throw(TypeError, "Argument must be a string");
    });
    it("case2", () => {
      expect(() => {
        myStringBuilder.append(0);
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.append(0);
      }).to.throw(TypeError, "Argument must be a string");
    });
    it("case3", () => {
      expect(() => {
        myStringBuilder.append();
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.append();
      }).to.throw(TypeError, "Argument must be a string");
    });
  });

  describe("test4", () => {
    it("case1", () => {
      expect(() => {
        myStringBuilder.prepend(123);
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.prepend(123);
      }).to.throw(TypeError, "Argument must be a string");
    });
    it("case2", () => {
      expect(() => {
        myStringBuilder.prepend(0);
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.prepend(0);
      }).to.throw(TypeError, "Argument must be a string");
    });
    it("case3", () => {
      expect(() => {
        myStringBuilder.prepend();
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.prepend();
      }).to.throw(TypeError, "Argument must be a string");
    });
  });

  describe("test5", () => {
    it("case1", () => {
      expect(() => {
        myStringBuilder.insertAt(0, 0);
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.insertAt(0, 0);
      }).to.throw(TypeError, "Argument must be a string");
    });
    it("case2", () => {
      expect(() => {
        myStringBuilder.insertAt(0);
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.insertAt(0);
      }).to.throw(TypeError, "Argument must be a string");
    });
    it("case3", () => {
      expect(() => {
        myStringBuilder.insertAt(0, 3);
      }).to.throw(TypeError, "Argument must be a string");
      expect(() => {
        myStringBuilder1.insertAt(0, 3);
      }).to.throw(TypeError, "Argument must be a string");
    });
  });
});
