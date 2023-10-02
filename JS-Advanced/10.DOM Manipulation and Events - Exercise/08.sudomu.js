function solve() {
  const tbody = document.getElementsByTagName("tbody")[0];
  const btns = document.getElementsByTagName("button");
  const quickCheckBtn = btns[0];
  const clearBtn = btns[1];
  const checkDiv = document.querySelector("#check p");
  const trs = Array.from(tbody.children);
  const inputs = Array.from(document.querySelectorAll("input"));

  quickCheckBtn.addEventListener("click", quickCheck);
  clearBtn.addEventListener("click", clear);

  let matrix = [];

  function quickCheck() {
    let isComplete = true;
    for (let tr of trs) {
      let row = [];
      let tds = Array.from(tr.children);
      for (let td of tds) {
        if (td.children[0].value == "") {
          isComplete = false;
        }
        row.push(Number(td.children[0].value));
      }
      matrix.push(row);
    }

    let sum = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix.length; i++) {
      let curRowSum = matrix[i].reduce((a, b) => a + b);

      let colSum = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        colSum += matrix[j][i];
      }

      if (colSum !== sum || curRowSum !== sum) {
        isComplete = false;
        break;
      }
    }

    if (isComplete) {
      checkDiv.textContent = "You solve it! Congratulations!";
      checkDiv.style.color = "green";
      tbody.parentElement.style.border = "2px solid green";
    } else {
      checkDiv.textContent = "NOP! You are not done yet...";
      checkDiv.style.color = "red";
      tbody.parentElement.style.border = "2px solid red";
    }
  }
  function clear() {
    for (let input of inputs) {
      input.value = "";
    }
    checkDiv.textContent = "";
    tbody.parentElement.style.border = "none";
  }
}
