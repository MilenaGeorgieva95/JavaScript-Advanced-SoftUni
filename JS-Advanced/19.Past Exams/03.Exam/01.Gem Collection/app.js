function solve() {
  const [gemstoneName, color, carats, price] = [
    ...document.querySelectorAll(".inner-wrap input"),
  ];
  const type = document.querySelector(".inner-wrap select");
  const addBtn = document.querySelector("#add-btn");
  addBtn.addEventListener("click", addToPreview);

  const ulSec2 = document.querySelector("#preview-list");
  const ulSec3 = document.querySelector("#collection");
  let infoList = [];

  if (
    !gemstoneName.value ||
    !color.value ||
    !carats.value ||
    !price.value ||
    !type.value
  ) {
    return;
  }

  function addToPreview(event) {
    event.preventDefault();
    infoList.push(
      gemstoneName.value,
      color.value,
      carats.value,
      price.value,
      type.value
    );
    let newLi = document.createElement("li");
    newLi.classList.add("gem-info");

    let text = `
      <article>
      <h4>${gemstoneName.value}</h4>
      <p>Color: ${color.value}</p>
      <p>Carats: ${carats.value}</p>
      <p>Price: ${price.value}$</p>
      <p>Type: ${type.value}</p>
      </article>
      <button class="save-btn">Save to Collection</button>
      <button class="edit-btn">Edit Information</button>
      <button class="cancel-btn">Cancel</button>
      `;

    newLi.innerHTML = text;
    ulSec2.appendChild(newLi);
    let [saveBtn, editBtn, cancelBtn] = [...newLi.querySelectorAll("button")];
    saveBtn.addEventListener("click", onSave);
    editBtn.addEventListener("click", onEdit);
    cancelBtn.addEventListener("click", onCancel);

    gemstoneName.value = "";
    color.value = "";
    carats.value = "";
    price.value = "";
    type.value = "";

    addBtn.disabled = true;
  }

  function onSave() {
    let text2 = `${infoList[0]} - Color: ${infoList[1]}/ Carats: ${infoList[2]}/ Price: ${infoList[3]}$/ Type: ${infoList[4]}`;

    let newP = document.createElement("p");
    newP.textContent += text2;
    newP.classList.add("collection-item");
    let newLi2 = document.createElement("li");
    newLi2.appendChild(newP);
    ulSec2.children[0].remove();
    ulSec3.appendChild(newLi2);
    addBtn.disabled = false;
    infoList = [];
  }

  function onEdit() {
    gemstoneName.value = infoList[0];
    color.value = infoList[1];
    carats.value = infoList[2];
    price.value = infoList[3];
    type.value = infoList[4];
    infoList = [];

    ulSec2.children[0].remove();
    addBtn.disabled = false;
  }
  function onCancel() {
    ulSec2.children[0].remove();
    addBtn.disabled = false;
    infoList = [];
  }
}
