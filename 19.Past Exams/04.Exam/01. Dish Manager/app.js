window.addEventListener("load", solve);

function solve() {
  const [firstNameInp, lastNameInp, ageInp] = [
    ...document.querySelectorAll("input"),
  ];
  const genderSelctInp = document.querySelector("#genderSelect");
  const dishDescriptionInp = document.querySelector("#task");
  const submitBtn = document.querySelector("#form-btn");

  const ulSec2 = document.querySelector("#in-progress");
  const ulSec3 = document.querySelector("#finished");
  const counter = document.querySelector("#progress-count");
  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", onClear);

  submitBtn.addEventListener("click", onSubmit);

  function onSubmit(event) {
    event.preventDefault();

    if (
      firstNameInp.value == "" ||
      lastNameInp.value == "" ||
      ageInp.value == "" ||
      dishDescriptionInp.value == ""
    ) {
      return;
    }

    let text = `
  <article>
  <h4>${firstNameInp.value + " " + lastNameInp.value}</h4>
  <p>${genderSelctInp.value}, ${ageInp.value}</p>
  <p>Dish description: ${dishDescriptionInp.value}</p>
  </article>
  <button class="edit-btn">Edit</button>
  <button class="complete-btn">Mark as complete</button>`;

    let newLi = document.createElement("li");
    newLi.classList.add("each-line");
    newLi.innerHTML = text;
    ulSec2.appendChild(newLi);

    let [editBtn, completeBtn] = newLi.querySelectorAll("button");
    editBtn.addEventListener("click", onEdit);
    completeBtn.addEventListener("click", onComplete);

    firstNameInp.value = "";
    lastNameInp.value = "";
    ageInp.value = "";
    dishDescriptionInp.value = "";

    counter.textContent = Number(counter.textContent) + 1;
  }

  function onEdit(event) {
    const targetLi = event.target.parentElement;
    const [firstNameInp2, lastNameInp2] = targetLi
      .querySelector("h4")
      .textContent.split(" ");
    const [p1, p2] = [...targetLi.querySelectorAll("p")];
    const [genderSelctInp2, ageInp2] = p1.textContent.split(", ");
    const dishDescriptionInp2 = p2.textContent.replace(
      "Dish description: ",
      ""
    );

    firstNameInp.value = firstNameInp2;
    lastNameInp.value = lastNameInp2;
    ageInp.value = ageInp2;
    genderSelctInp.value = genderSelctInp2;
    dishDescriptionInp.value = dishDescriptionInp2;

    targetLi.remove();

    counter.textContent = Number(counter.textContent) - 1;
  }

  function onComplete(event) {
    let targetLi2 = event.target.parentElement;
    let [btn1, btn2] = [...targetLi2.querySelectorAll("button")];
    btn1.remove();
    btn2.remove();
    ulSec3.appendChild(targetLi2);

    counter.textContent = Number(counter.textContent) - 1;
  }

  function onClear() {
    let sec3Arr = Array.from(ulSec3.children);
    sec3Arr.forEach((el) => el.remove());
  }
}
