function calc() {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  let sum = Number(num1) + Number(num2);
  document.querySelector("#sum").value = sum;
}
