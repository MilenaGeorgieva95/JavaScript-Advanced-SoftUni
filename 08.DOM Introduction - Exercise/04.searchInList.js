function search() {
  let input = document.querySelector("#searchText").value;

  let towns = Array.from(document.querySelectorAll("#towns li"));

  let counter = 0;

  towns.forEach((town) => {
    if (town.innerText.includes(input)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      return counter++;
    }
    town.style.fontWeight = "";
    town.style.textDecoration = "none";
  });

  document.querySelector("#result").textContent = `${counter} matches found`;
}
