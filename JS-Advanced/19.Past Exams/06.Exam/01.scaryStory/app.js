window.addEventListener("load", solve);

function solve() {
  const [firstName, lastName, age, storyTitle] = [
    ...document.querySelectorAll("input"),
  ];
  const genre = document.querySelector("#genre");
  const storyText = document.querySelector("#story");
  const publishBtn = document.querySelector("#form-btn");
  publishBtn.addEventListener("click", onPublish);
  const ulSec2 = document.querySelector("#preview-list");
  const main = document.querySelector("#main");
  let infoList = [];

  function onPublish(event) {
    event.preventDefault();

    if (
      !firstName.value ||
      !lastName.value ||
      !age.value ||
      !storyTitle.value ||
      !storyText.value
    ) {
      return;
    }

    let text = `
<article>
<h4>Name: ${firstName.value} ${lastName.value}</h4>
<p>Age: ${age.value}</p>
<p>Title: ${storyTitle.value}</p>
<p>Genre: ${genre.value}</p>
<p>${storyText.value}</p>
</article>
<button class="save-btn">Save Story</button>
<button class="edit-btn">Edit Story</button>
<button class="delete-btn">Delete Story</button>`;

    let newLi = document.createElement("li");
    newLi.classList.add("story-info");
    newLi.innerHTML = text;
    ulSec2.appendChild(newLi);

    let [saveB, editB, deleteB] = [...newLi.querySelectorAll("button")];
    saveB.addEventListener("click", onSave);
    editB.addEventListener("click", onEdit);
    deleteB.addEventListener("click", onDelete);

    infoList = [];
    infoList.push(
      firstName.value,
      lastName.value,
      age.value,
      storyTitle.value,
      genre.value,
      storyText.value
    );
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    genre.value = "Disturbing";
    storyText.value = "";

    publishBtn.disabled = true;
  }

  function onSave() {
    let mainChildren = Array.from(main.children);
    mainChildren.forEach((el) => el.remove());
    let h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!";
    main.appendChild(h1);
  }
  function onEdit() {
    firstName.value = infoList[0];
    lastName.value = infoList[1];
    age.value = infoList[2];
    storyTitle.value = infoList[3];
    genre.value = infoList[4];
    storyText.value = infoList[5];
    publishBtn.disabled = false;
    ulSec2.children[1].remove();
  }
  function onDelete() {
    ulSec2.children[1].remove();
    publishBtn.disabled = false;
  }
}
