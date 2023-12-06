function deleteByEmail() {
  const input = document.querySelector("input[name='email']").value;

  const rows = document.querySelectorAll("#customers tbody tr");

  const rowsArray = Array.from(rows);

  const match = rowsArray.find((row) => row.children[1].textContent == input);

  if (match) {
    document.getElementById("result").textContent = "Deleted.";
    match.remove();
  } else {
    document.getElementById("result").textContent = "Not found.";
  }
}
