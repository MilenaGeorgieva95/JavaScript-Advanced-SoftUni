window.addEventListener("load", solve);

function solve() {
  const [appendSec, partSec, confSec] = [
    ...document.querySelectorAll("#wrapper section"),
  ];
  let ulAppend = partSec.querySelector(".info-list");
  let ulConf = confSec.querySelector(".confirm-list");
  const [modelInp, yearInp, partNameInp, partNumInp] = [
    ...document.querySelectorAll("form input"),
  ];
  const conditionSelct = document.querySelector("form select");
  const submitBtn = document.querySelector("form button");

  const complImg = document.querySelector("#complete-img");
  const complText = document.querySelector("#complete-text");

  submitBtn.addEventListener("click", onSubmit);
  let inputInfo = [];

  function onSubmit(event) {
    event.preventDefault();

    if (
      !modelInp.value ||
      !yearInp.value ||
      !partNameInp.value ||
      !partNumInp.value ||
      !conditionSelct.value ||
      Number(yearInp.value) < 1980 ||
      Number(yearInp.value) > 2023
    ) {
      return;
    }
    complText.textContent = "";
    complImg.style.visibility = "hidden";

    inputInfo.push(
      modelInp.value,
      yearInp.value,
      partNameInp.value,
      partNumInp.value,
      conditionSelct.value
    );
    let newLi = document.createElement("li");
    newLi.classList.add("part-content");

    let text = `
<article>
<p>Car Model: ${modelInp.value}</p>
<p>Car Year: ${yearInp.value}</p>
<p>Part Name: ${partNameInp.value}</p>
<p>Part Number: ${partNumInp.value}</p>
<p>Condition: ${conditionSelct.value}</p>
</article>
<button class="edit-btn">Edit</button>
<button class="continue-btn">Continue</button>
`;

    newLi.innerHTML = text;
    ulAppend.appendChild(newLi);
    let [editBtn, continueBtn] = [...newLi.querySelectorAll("button")];
    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    modelInp.value = "";
    yearInp.value = "";
    partNameInp.value = "";
    partNumInp.value = "";
    conditionSelct.value = "";

    submitBtn.disabled = true;
  }

  function onEdit() {
    modelInp.value = inputInfo[0];
    yearInp.value = inputInfo[1];
    partNameInp.value = inputInfo[2];
    partNumInp.value = inputInfo[3];
    conditionSelct.value = inputInfo[4];
    submitBtn.disabled = false;
    ulAppend.children[0].remove();
  }
  function onContinue() {
    let myLi = ulAppend.children[0];
    let [confBtn, cancBtn] = [...myLi.querySelectorAll("button")];
    confBtn.textContent = "Confirm";
    confBtn.classList.remove("edit-btn");
    confBtn.classList.add("confirm-btn");

    cancBtn.textContent = "Cancel";
    cancBtn.classList.remove("continue-btn");
    cancBtn.classList.add("cancel-btn");
    ulConf.appendChild(myLi);

    confBtn.addEventListener("click", onConfirm);
    cancBtn.addEventListener("click", onCancel);
    confBtn.removeEventListener("click", onEdit);
    cancBtn.removeEventListener("click", onContinue);
  }

  function onConfirm() {
    let myLi = document.querySelector(".part-content");
    myLi.remove();
    submitBtn.disabled = false;
    complImg.style.visibility = "visible";
    complText.textContent = "Part is Ordered!";
  }
  function onCancel() {
    let myLi = document.querySelector(".confirm-list li");
    myLi.remove();
    submitBtn.disabled = false;
  }
}
