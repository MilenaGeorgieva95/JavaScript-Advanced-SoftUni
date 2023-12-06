function addItem() {
  const text = document.getElementById("newItemText").value;
  const myLi = document.createElement("li");

  let deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  deleteBtn.addEventListener("click", removeItem);

  function removeItem() {
    myLi.remove();
  }

  myLi.appendChild(deleteBtn);
  myLi.appendChild(document.createTextNode(text));

  document.getElementById("items").appendChild(myLi);

  document.getElementById("newItemText").value = "";
}
