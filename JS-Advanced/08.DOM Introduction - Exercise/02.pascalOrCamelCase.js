function solve() {
  let text = document.querySelector("#text").value.toLowerCase();
  let convention = document.querySelector("#naming-convention").value;

  let result = "";

  switch (convention) {
    case "Camel Case":
      const arr = text.split(" ");
      result += arr.shift();
      arr.forEach((el) => (result += el[0].toUpperCase() + el.substring(1)));
      break;
    case "Pascal Case":
      const arr2 = text.split(" ");
      arr2.forEach((el) => (result += el[0].toUpperCase() + el.substring(1)));
      break;
    default:
      result = "Error!";
  }

  document.querySelector("#result").innerText += result;
}
