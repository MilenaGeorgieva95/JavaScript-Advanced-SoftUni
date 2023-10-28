function loadPage() {
  const mainPage = document.querySelector("main");
  const loadingP = document.querySelector("main p");
  const url = `http://localhost:3030/jsonstore/cookbook/recipes`;
  loadrecipes();

  async function loadrecipes() {
    try {
      const recipes = await fetch(url);
      if (recipes.ok == false) {
        throw recipes.status;
      }
      mainPage.replaceChildren();
      const recipesData = await recipes.json();
      console.log(recipesData);
      for (let key in recipesData) {
        let text = `
        <div>
            <h2>${recipesData[key].name}</h2>
            <img src="${recipesData[key].img}" alt="">
        </div>`;
        let newArticle = document.createElement("article");
        newArticle.id = recipesData[key]._id;
        newArticle.innerHTML = text;
        newArticle.addEventListener("click", onDetails);
        mainPage.appendChild(newArticle);
      }
    } catch (error) {
      loadingP.textContent = "Error occurred: " + error;
    }
  }

  async function onDetails(event) {
    try {
      const selectedRec = event.currentTarget;
      const id = selectedRec.id;
      const url1 = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

      const response = await fetch(url1);
      if (response.ok == false) {
        throw response.status;
      }
      const data = await response.json();

      let text2 = ` 
        <article>
        <h2>${data.name}</h2>
        <div class="ingredients">
            <h3>Ingredients:</h3>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
    </div>
    </article>`;
      mainPage.innerHTML = text2;

      let ingUl = document.createElement("ul");
      for (let ingredient of data.ingredients) {
        let li = document.createElement("li");
        li.textContent = ingredient;
        ingUl.appendChild(li);
      }

      const ingDiv = document.querySelector(".ingredients");
      ingDiv.appendChild(ingUl);

      let prepDiv = document.querySelector(".description");
      for (let step of data.steps) {
        let prepP = document.createElement("p");
        prepP.textContent = step;
        prepDiv.appendChild(prepP);
      }
    } catch (error) {
      mainPage.textContent = "Error occurred: " + error;
    }
  }
}
