window.addEventListener("load", solve);

function solve() {
  const [firstName, lastName, peopleCount, date, daysCount] = [
    ...document.querySelectorAll("input"),
  ];
  const nextBtn = document.querySelector("#next-btn");
  const ulSec2 = document.querySelector(".ticket-info-list");
  const ulSec3 = document.querySelector(".confirm-ticket");
  const main = document.querySelector("#main");
  const body = document.querySelector("#body");

  nextBtn.addEventListener("click", onNext);
  let infoArr = [];

  function onNext(event) {
    event.preventDefault();

    if (
      !firstName.value ||
      !lastName.value ||
      !peopleCount.value ||
      !date.value ||
      !daysCount.value
    ) {
      return;
    }
    infoArr = [];
    infoArr.push(
      firstName.value,
      lastName.value,
      peopleCount.value,
      date.value,
      daysCount.value
    );

    let text = `
<article>
<h3>Name: ${firstName.value} ${lastName.value}</h3>
<p>From date: ${date.value}</p>
<p>For ${daysCount.value} days</p>
<p>For ${peopleCount.value} people</p>
</article>
<button class="edit-btn">Edit</button>
<button class="continue-btn">Continue</button>`;

    let newLi = document.createElement("li");
    newLi.classList.add("ticket");
    newLi.innerHTML = text;
    ulSec2.appendChild(newLi);

    let [editBtn, continueBtn] = [...newLi.querySelectorAll("button")];
    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    nextBtn.disabled = true;

    firstName.value = "";
    lastName.value = "";
    peopleCount.value = "";
    date.value = "";
    daysCount.value = "";
  }

  function onEdit() {
    firstName.value = infoArr[0];
    lastName.value = infoArr[1];
    peopleCount.value = infoArr[2];
    date.value = infoArr[3];
    daysCount.value = infoArr[4];
    ulSec2.children[0].remove();
    nextBtn.disabled = false;
  }
  function onContinue() {
    let myLi2 = ulSec2.children[0];
    myLi2.classList.remove("ticket");
    myLi2.classList.add("ticket-content");
    let [confirmBtn, cancelBtn] = [...myLi2.querySelectorAll("button")];
    confirmBtn.removeEventListener("click", onEdit);
    confirmBtn.addEventListener("click", onConfirm);
    confirmBtn.textContent = "Confirm";
    confirmBtn.classList.remove("edit-btn");
    confirmBtn.classList.add("confirm-btn");
    cancelBtn.removeEventListener("click", onContinue);
    cancelBtn.addEventListener("click", onCancel);
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.remove("continue-btn");
    cancelBtn.classList.add("cancel-btn");

    ulSec3.appendChild(myLi2);
  }

  function onConfirm() {
    main.remove();
    let h1 = document.createElement("h1");
    h1.id = "thank-you";
    h1.textContent = "Thank you, have a nice day!";
    let backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.id = "back-btn";
    backBtn.addEventListener("click", reloadPage);
    body.appendChild(h1);
    body.appendChild(backBtn);
  }
  function onCancel() {
    ulSec3.children[0].remove();
    nextBtn.disabled = false;
  }

  function reloadPage() {
    location.reload();
  }
}
