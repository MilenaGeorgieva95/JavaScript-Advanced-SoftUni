function notify(message) {
  const divNotification = document.querySelector("#notification");
  divNotification.textContent = message;
  divNotification.style.display = "block";
  divNotification.addEventListener("click", hide);

  function hide() {
    divNotification.style.display = "none";
  }
}
