function search() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let searchField = document.querySelector("#searchField");
  let rows = Array.from(document.querySelectorAll("tbody tr"));

  function onClick() {
    let searchedText = searchField.value;

    for (let row of rows) {
      let tableData = row.querySelectorAll("td");

      for (let td of tableData) {
        if (td.textContent.includes(searchedText)) {
          row.classList.add("select");
          row.style.textDecoration = "underline";
          break;
        } else {
          row.classList.remove("select");
          row.style.textDecoration = "none";
        }
      }
    }
    searchField.value = "";
  }
}
