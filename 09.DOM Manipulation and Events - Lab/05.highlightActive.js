function focused() {
  const inputs = document.getElementsByTagName("input");

  for (let input of inputs) {
    input.addEventListener("focus", (event) => {
      event.target.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", (event) => {
      event.target.parentElement.classList.remove("focused");
    });
  }
}
