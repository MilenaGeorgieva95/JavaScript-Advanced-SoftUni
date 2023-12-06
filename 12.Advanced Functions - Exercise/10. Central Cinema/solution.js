function solve() {
  const [name, hall, price] = [...document.getElementsByTagName("input")];
  const onScreenBtn = document.getElementsByTagName("button")[0];
  const moviesSection = document.querySelector("#movies ul");
  const archiveSection = document.querySelector("#archive ul");
  const archiveBtn = archiveSection.parentElement.querySelector("button");

  archiveBtn.addEventListener("click", onClear);
  onScreenBtn.addEventListener("click", addSection);

  let priceValue = 0;

  function addSection(event) {
    event.preventDefault();

    let isValid = !isNaN(price.value);
    if (name.value && hall.value && isValid) {
      priceValue = Number(price.value);
      if (priceValue == 0) {
        return;
      }

      let newLiHtml = `
        <span>${name.value}</span>
        <strong>Hall: ${hall.value}</strong>
        <div>
        <strong>${priceValue.toFixed(2)}</strong>
        <input placeholder="Tickets Sold">
        <button>Archive</button>
        </div>
        `;
      let newLi = document.createElement("li");
      newLi.innerHTML = newLiHtml;
      moviesSection.appendChild(newLi);

      name.value = "";
      hall.value = "";
      price.value = "";

      const button = newLi.querySelector("button");
      button.addEventListener("click", onArchive);
    }
  }

  function onArchive(event) {
    const arcLi = event.target.parentElement.parentElement;
    const arcInput = arcLi.querySelector("input");
    const inputValue = arcInput.value;

    if (isNaN(inputValue) || !inputValue) {
      return;
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", onDelete);
    arcLi.appendChild(deleteBtn);
    archiveSection.appendChild(arcLi);

    const arcDiv = arcLi.querySelector("div");
    arcDiv.remove();

    const totalAmount = arcLi.querySelector("strong");
    totalAmount.innerHTML = `Total amount: ${(
      priceValue * Number(inputValue)
    ).toFixed(2)}`;
  }

  function onDelete(event) {
    event.target.parentElement.remove();
  }

  function onClear() {
    const liSections = Array.from(archiveSection.getElementsByTagName("li"));
    liSections.forEach((el) => el.remove());
  }
}
