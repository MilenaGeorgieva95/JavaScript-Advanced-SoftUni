function addItem() {
  const text = document.getElementById("newItemText").value;

  const myLi = document.createElement("li");

  myLi.appendChild(document.createTextNode(text));

  document.getElementById("items").appendChild(myLi);

  document.getElementById("newItemText").value = "";
}
