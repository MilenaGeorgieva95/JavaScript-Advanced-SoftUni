function create(words) {
  let content = document.querySelector("#content");

  for (let word of words) {
    let div = document.createElement("div");
    div.style.backgroundColor = "blue";
    div.style.width = "40%";
    div.style.height = "100px";
    div.style.border = "2px solid white";
    div.addEventListener("click", display);

    let p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";

    div.appendChild(p);
    content.appendChild(div);
  }
  function display(element) {
    element.currentTarget.querySelector("p").style.display = "block";
  }
}
