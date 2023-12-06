window.addEventListener("load", solve);

function solve() {
  const [startSec, infoSec, prevSec, confSec] = [
    ...document.getElementsByTagName("section"),
  ];
  const prevSecUl = prevSec.querySelector("ul");
  const formSec = infoSec.querySelector("form");
  const [nameInp, emailInp, contactNumInp] = [
    ...formSec.querySelectorAll("input"),
  ];
  const [classTypeSelct, classTimeSelct] = [
    ...formSec.querySelectorAll("select"),
  ];
  const nextBtn = formSec.querySelector("button");

  nextBtn.addEventListener("click", checkAndSubmit);
  let info = [];

  function checkAndSubmit(event) {
    event.preventDefault();
    info = [];
    if (
      !nameInp.value ||
      !emailInp.value ||
      !contactNumInp.value ||
      !classTypeSelct.value ||
      !classTimeSelct.value
    ) {
      return;
    }
    info.push(
      nameInp.value,
      emailInp.value,
      contactNumInp.value,
      classTypeSelct.value,
      classTimeSelct.value
    );

    let articleAsText = createArticle(
      nameInp.value,
      emailInp.value,
      contactNumInp.value,
      classTypeSelct.value,
      classTimeSelct.value
    );
    let newLi = document.createElement("li");
    newLi.classList.add("info-item");
    newLi.innerHTML = articleAsText;
    prevSecUl.appendChild(newLi);
    let [editBtn, continueBtn] = [...newLi.querySelectorAll("button")];
    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);
    nameInp.value = "";
    emailInp.value = "";
    contactNumInp.value = "";
    classTypeSelct.value = "";
    classTimeSelct.value = "";
    nextBtn.disabled = true;
  }
  function createArticle(name, email, num, type, time) {
    let text = `
    <article class="personal-info">
    <p>${name}</p>
    <p>${email}</p>
    <p>${num}</p>
    <p>${type}</p>
    <p>${time}</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="continue-btn">Continue</button>
    `;
    return text;
  }
  function onEdit(event) {
    (nameInp.value = info[0]),
      (emailInp.value = info[1]),
      (contactNumInp.value = info[2]),
      (classTypeSelct.value = info[3]),
      (classTimeSelct.value = info[4]);
    event.target.parentElement.remove();
    nextBtn.disabled = false;
  }
  function onContinue(event) {
    let li = event.target.parentElement;
    li.classList.remove("info-item");
    li.classList.add("continue-info");
    let btns = li.querySelectorAll("button");
    btns[0].textContent = "Cancel";
    btns[0].classList.remove("edit-btn");
    btns[0].classList.add("cancel-btn");

    btns[1].textContent = "Confirm";
    btns[1].classList.remove("continue-btn");
    btns[1].classList.add("confirm-btn");

    btns[0].removeEventListener("click", onEdit);
    btns[1].removeEventListener("click", onContinue);

    btns[0].addEventListener("click", onCancel);
    btns[1].addEventListener("click", onConfirm);
    let ulSec = confSec.querySelector("ul");
    ulSec.appendChild(li);
  }

  function onCancel(event) {
    event.target.parentElement.remove();
    nextBtn.disabled = false;
  }
  function onConfirm() {
    document.querySelector("#main").remove();
    let main = document.querySelector("#body");
    let h1 = document.createElement("h1");
    h1.id = "thank-you";
    h1.textContent =
      "Thank you for scheduling your appointment, we look forward to seeing you!";
    main.appendChild(h1);

    let btnDone = document.createElement("button");
    btnDone.id = "done-btn";
    btnDone.textContent = "Done";
    main.appendChild(btnDone);
    btnDone.addEventListener("click", reloadPage);
  }

  function reloadPage() {
    location.reload();
  }
}
