function validate() {
  const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
  const passwordPattern = /^[\w]{5,15}$/;
  const emailPattern = /^[^@]*@[^.]*\..*$/;

  const usernameInput = document.querySelector("#username");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const confPasswordInput = document.querySelector("#confirm-password");

  const companyCheckbox = document.querySelector("#company");
  companyCheckbox.addEventListener("change", showMore);
  const companyFieldset = document.querySelector("#companyInfo");
  const companyNumber = document.querySelector("#companyNumber");

  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", submit);

  const isValidDiv = document.querySelector("#valid");
  let isAllDone = true;

  function showMore() {
    companyFieldset.style.display =
      companyFieldset.style.display === "block" ? "none" : "block";
  }

  function submit(event) {
    event.preventDefault();
    validateCredentials(usernameInput, usernamePattern);
    validateCredentials(emailInput, emailPattern);
    validateCredentials(passwordInput, passwordPattern);
    validateCredentials(confPasswordInput, passwordPattern);
    confirmPassword();
    validateNum();

    if (isAllDone) {
      isValidDiv.style.display = "block";
    } else {
      isValidDiv.style.display = "none";
    }
    isAllDone = true;
  }

  function validateCredentials(input, pattern) {
    let text = input.value;
    if (text == "") {
      input.style.borderColor = "red";
      isAllDone = false;
    } else {
      let match = text.match(pattern);
      if (match) {
        input.style.borderColor = "";
      } else {
        input.style.borderColor = "red";
        isAllDone = false;
      }
    }
  }

  function confirmPassword() {
    let password2 = confPasswordInput.value;
    if (password2 != passwordInput.value) {
      confPasswordInput.style.borderColor = "red";
      passwordInput.style.borderColor = "red";

      isAllDone = false;
    }
  }
  function validateNum() {
    if (companyCheckbox.checked == true) {
      let num = companyNumber.value;
      if (num == "" || isNaN(Number(num))) {
        companyNumber.style.borderColor = "red";
        isAllDone = false;
      } else {
        num = Number(num);
        if (num < 1000 || num > 9999) {
          companyNumber.style.borderColor = "red";
          isAllDone = false;
        } else {
          companyNumber.style.borderColor = "";
        }
      }
    }
  }
}
