function sumTable() {
  let prices = document.querySelectorAll("tbody  td:nth-child(2n)");

  let total = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    total += Number(prices[i].innerText);
  }

  document.querySelector("#sum").innerText = total;
}
