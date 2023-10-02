function lockedProfile() {
  let profiles = document.querySelectorAll("div.profile");

  for (let profile of profiles) {
    let button = profile.querySelector("button");
    button.addEventListener("click", showMore);
  }

  function showMore(element) {
    let profile = element.target.parentElement;
    const button = element.target;
    const lockStatus = profile.querySelector("input[type=radio]:checked").value;

    let hiddenEl = profile.children[9];

    if (lockStatus === "unlock") {
      hiddenEl.style.display =
        hiddenEl.style.display == "block" ? "none" : "block";
      button.textContent =
        button.textContent == "Hide it" ? "Show more" : "Hide it";
    }
  }
}
