window.addEventListener("load", solve);

function solve() {
  const [firstName, lastName, checkInDate, checkOutDate, guestsCount] = [
    ...document.querySelectorAll("input"),
  ];
  const nextBtn = document.querySelector("#next-btn");
  nextBtn.addEventListener("click", onNext);
  let infoList = [];
  const ulSec2 = document.querySelector(".info-list");
  const ulSec3 = document.querySelector(".confirm-list");
  const h1Sec4 = document.querySelector("#verification");

  function onNext(event) {
    event.preventDefault();
    if (
      !firstName.value ||
      !lastName.value ||
      !checkInDate.value ||
      !checkOutDate.value ||
      !guestsCount.value
    ) {
      return;
    }

    let checkInD = new Date(checkInDate.value);
    let checkOutD = new Date(checkOutDate.value);

    if (checkOutD <= checkInD) {
      return;
    }
    infoList = [];
    infoList.push(
      firstName.value,
      lastName.value,
      checkInDate.value,
      checkOutDate.value,
      guestsCount.value
    );

    let text = `
<article>
    <h3>Name: ${firstName.value} ${lastName.value}</h3>
    <p>From date: ${checkInDate.value}</p>
    <p>To date: ${checkOutDate.value}</p>
    <p>For ${guestsCount.value} people</p>
</article>
<button class="edit-btn">Edit</button>
<button class="continue-btn">Continue</button>`;

    let newLi = document.createElement("li");
    newLi.classList.add("reservation-content");
    newLi.innerHTML = text;
    ulSec2.appendChild(newLi);

    let [editBtn, continueBtn] = [...newLi.querySelectorAll("button")];
    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    firstName.value = "";
    lastName.value = "";
    checkInDate.value = "";
    checkOutDate.value = "";
    guestsCount.value = "";

    nextBtn.disabled = true;
  }

  function onEdit() {
    firstName.value = infoList[0];
    lastName.value = infoList[1];
    checkInDate.value = infoList[2];
    checkOutDate.value = infoList[3];
    guestsCount.value = infoList[4];

    nextBtn.disabled = false;
    ulSec2.children[0].remove();
  }
  function onContinue() {
    let newLi2 = ulSec2.children[0];
    let [confirmBtn, cancelBtn] = [...newLi2.querySelectorAll("button")];
    confirmBtn.classList.remove("edit-btn");
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.textContent = "Confirm";
    confirmBtn.removeEventListener("click", onEdit);
    confirmBtn.addEventListener("click", onConfirm);

    cancelBtn.classList.remove("continue-btn");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    cancelBtn.removeEventListener("click", onContinue);
    cancelBtn.addEventListener("click", onCancel);
    ulSec3.appendChild(ulSec2.children[0]);
  }

  function onConfirm() {
    ulSec3.children[0].remove();
    nextBtn.disabled = false;
    h1Sec4.classList.add("reservation-confirmed");
    h1Sec4.textContent = "Confirmed.";
  }
  function onCancel() {
    ulSec3.children[0].remove();
    nextBtn.disabled = false;
    h1Sec4.classList.add("reservation-cancelled");
    h1Sec4.textContent = "Cancelled.";
  }
}
