function validate() {
  const input = document.querySelector("#email");
  input.addEventListener("change", validateEmail);
  const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

  function validateEmail(event) {
    let emailText = event.target.value;
    if (emailText === "") {
      input.classList.add("error");
    } else {
      let match = emailText.match(emailPattern);
      if (match) {
        input.classList.remove("error");
      } else {
        input.classList.add("error");
      }
    }
  }
}
