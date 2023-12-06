function solve() {
  const formRef = document.querySelector("form");
  const taskRef = document.getElementById("task");
  const taskDescRef = document.getElementById("description");
  const dateRef = document.getElementById("date");
  const sectionsRef = document.querySelectorAll("section");
  const openRef = sectionsRef[1];
  const inProgressRef = sectionsRef[2];
  const completedRef = sectionsRef[3];

  formRef.addEventListener("click", onSubmit);

  function onSubmit(event) {
    event.preventDefault();
    const taskValue = taskRef.value;
    const taskDesc = taskDescRef.value;
    const date = dateRef.value;

    if (!taskDesc || !taskValue || !date) {
      return;
    }
    let myArticle = createArticle(taskValue, taskDesc, date);

    openRef.children[1].appendChild(myArticle);
    taskRef.value = "";
    taskDescRef.value = "";
    dateRef.value = "";
  }

  function createArticle(name, desc, date) {
    let article = document.createElement("article");
    article.innerHTML = `
    <h3>${name}</h3>
    <p>Description: ${desc}</p>
    <p>Due Date: ${date}</p>
    <div class='flex'>
    <button class='green'>Start</button>
    <button class='red'>Delete</button>
    </div>
    `;
    const [startBtn, deleteBtn] = article.querySelectorAll("button");
    startBtn.addEventListener("click", moveArticle.bind(this, "inProgress"));
    deleteBtn.addEventListener("click", onDelete);
    return article;
  }
  function moveArticle(section, event) {
    const article = event.target.parentElement.parentElement;
    inProgressRef.children[1].appendChild(article);
    const [deleteBtn, finishBtn] = article.querySelectorAll("button");
    deleteBtn.textContent = "Delete";
    finishBtn.textContent = "Finish";
    deleteBtn.classList.add("red");
    deleteBtn.classList.remove("green");

    finishBtn.classList.add("orange");
    finishBtn.classList.remove("red");
    deleteBtn.removeEventListener("click", moveArticle);
    deleteBtn.addEventListener("click", onDelete);
    finishBtn.addEventListener("click", onFinish);
  }

  function onFinish(event) {
    const article = event.target.parentElement.parentElement;
    event.target.parentElement.remove();
    completedRef.children[1].appendChild(article);
  }

  function onDelete(event) {
    event.target.parentElement.parentElement.remove();
  }
}
