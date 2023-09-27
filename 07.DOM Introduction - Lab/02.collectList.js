function extractText() {
  let data = "";
  let list = document.querySelectorAll("#items li");
  for (let item of list) {
    data += item.innerText + "\n";
  }
  document.querySelector("#result").value = data;
}
