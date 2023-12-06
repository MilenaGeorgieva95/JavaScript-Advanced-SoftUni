function validate() {
  const input = document.querySelector("#email");

  input.addEventListener("change", check);

  let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

  function check() {
    const email = input.value;
    let match = email.match(pattern);
    if (match) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  }
}
