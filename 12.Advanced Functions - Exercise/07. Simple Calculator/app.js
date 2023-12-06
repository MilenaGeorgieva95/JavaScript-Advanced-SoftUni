function calculator() {
  let selectorOneElement;
  let selectorTwoElement;
  let resultFieldElement;

  let calculate = {
    init(num1, num2, result) {
      selectorOneElement = document.querySelector(num1);
      selectorTwoElement = document.querySelector(num2);
      resultFieldElement = document.querySelector(result);
    },

    add() {
      resultFieldElement.value =
        Number(selectorOneElement.value) + Number(selectorTwoElement.value);
    },

    subtract() {
      resultFieldElement.value =
        Number(selectorOneElement.value) - Number(selectorTwoElement.value);
    },
  };

  return calculate;
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
