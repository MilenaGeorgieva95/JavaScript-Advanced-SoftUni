function solve() {
  let input = document.querySelector("#input");
  let result = document.querySelector("#result");
  let selectMenuTo = document.querySelector("#selectMenuTo");

  let binaryOption = document.createElement("option");
  binaryOption.value = "binary";
  binaryOption.textContent = "Binary";
  selectMenuTo.appendChild(binaryOption);

  let hexadecimalOption = document.createElement("option");
  hexadecimalOption.value = "hexadecimal";
  hexadecimalOption.textContent = "Hexadecimal";
  selectMenuTo.appendChild(hexadecimalOption);

  document.getElementsByTagName("button")[0].addEventListener("click", convert);

  function convert() {
    if (selectMenuTo.value === "binary") {
      result.value = Number(input.value).toString(2);
    } else if (selectMenuTo.value === "hexadecimal") {
      result.value = Number(input.value).toString(16).toUpperCase();
    }
  }
}
