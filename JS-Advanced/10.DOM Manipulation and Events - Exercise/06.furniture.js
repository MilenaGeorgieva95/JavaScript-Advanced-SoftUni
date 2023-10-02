function solve() {
  const buttons = document.querySelectorAll("button");
  const generateBtn = buttons[0];
  const buyBtn = buttons[1];
  const textareas = document.querySelectorAll("textarea");
  const generateArea = textareas[0];
  const buyArea = textareas[1];
  const container = document.querySelector("tbody");

  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  function generate() {
    if (!generateArea.value) {
      return;
    }
    const inputArr = JSON.parse(generateArea.value);

    for (let item of inputArr) {
      let img = document.createElement("img");
      img.src = item.img;
      let imgTd = document.createElement("td");
      imgTd.appendChild(img);

      let nameP = document.createElement("p");
      nameP.textContent = item.name;
      let nameTd = document.createElement("td");
      nameTd.appendChild(nameP);

      let priceP = document.createElement("p");
      priceP.textContent = item.price;
      let priceTd = document.createElement("td");
      priceTd.appendChild(priceP);

      let decorationP = document.createElement("p");
      decorationP.textContent = item.decFactor;
      let decorationTd = document.createElement("td");
      decorationTd.appendChild(decorationP);

      let input = document.createElement("input");
      input.type = "checkbox";
      let checkboxTd = document.createElement("td");
      checkboxTd.appendChild(input);

      let newTr = document.createElement("tr");

      newTr.appendChild(imgTd);
      newTr.appendChild(nameTd);
      newTr.appendChild(priceTd);
      newTr.appendChild(decorationTd);
      newTr.appendChild(checkboxTd);

      container.appendChild(newTr);
    }

    generateArea.value = "";
  }

  function buy() {
    buyArea.value = "";
    let totalPrice = 0;
    let itemsList = [];
    let totalDecFactor = 0;

    let rowInputs = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    );

    for (let input of rowInputs) {
      let [imgTd, nameTd, priceTd, decFactorTd] = Array.from(
        input.parentElement.parentElement.children
      );
      itemsList.push(nameTd.children[0].textContent);
      totalPrice += Number(priceTd.children[0].textContent);
      totalDecFactor += Number(decFactorTd.children[0].textContent);
    }
    averageDecF = totalDecFactor / rowInputs.length;
    let text = `Bought furniture: ${itemsList.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${averageDecF}`;
    buyArea.value = text;
  }
}
