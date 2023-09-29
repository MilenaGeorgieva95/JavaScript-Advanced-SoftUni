function toggle() {
  let buttonTag = document.querySelector(".button");
  let paragraph = document.querySelector("#extra");
  console.log(buttonTag.textContent);

  buttonTag.textContent = buttonTag.textContent === "More" ? "Less" : "More";
  paragraph.style.display =
    paragraph.style.display === "block" ? "none" : "block";
}
