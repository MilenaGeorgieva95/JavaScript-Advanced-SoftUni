function addItem() {
  const menu = document.querySelector("#menu");
  const newText = document.querySelector("#newItemText");
  const newValue = document.querySelector("#newItemValue");

  const option = document.createElement("option");
  option.textContent = newText.value;
  option.value = newValue.value;

  menu.appendChild(option);

  newText.value = "";
  newValue.value = "";
}
