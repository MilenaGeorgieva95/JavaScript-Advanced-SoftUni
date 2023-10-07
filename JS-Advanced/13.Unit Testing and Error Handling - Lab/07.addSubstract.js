function createCalculator() {
  let value = 0;
  return {
    add: function (num) {
      value += Number(num);
    },
    subtract: function (num) {
      value -= Number(num);
    },
    get: function () {
      return value;
    },
  };
}

const calc1 = createCalculator();

calc1.add(1);
const calc2 = createCalculator();
// calc2.add(2);
console.log(calc1.get());

module.exports = createCalculator;
