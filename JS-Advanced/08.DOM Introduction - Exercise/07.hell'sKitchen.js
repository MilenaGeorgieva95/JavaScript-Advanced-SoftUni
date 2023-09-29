function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  let bestRestaurant = document.querySelector("#bestRestaurant p");
  let bestWorkers = document.querySelector("#workers p");
  const input = document.querySelector("#inputs textarea");

  function onClick() {
    const inputArr = JSON.parse(input.value);
    let list = [];

    for (let line of inputArr) {
      let [name, data] = line.split(" - ");
      let workersInfo = data.split(", ");
      let workersObj = {};
      for (let workerDetails of workersInfo) {
        let [workerName, workerSalary] = workerDetails.split(" ");
        workerSalary = Number(workerSalary);
        workersObj[workerName] = workerSalary;
      }

      let existingRestaurant = list.find((obj) => obj.name === name);
      if (existingRestaurant) {
        Object.assign(existingRestaurant.workersObj, workersObj);
      } else {
        let tempObj = {
          name,
          workersObj: workersObj,
        };
        list.push(tempObj);
      }

      for (let obj of list) {
        let salariesArr = Object.values(obj.workersObj);
        let bestSalary = Math.max(...salariesArr);
        let averageSalary = 0;
        salariesArr.forEach((el) => (averageSalary += el));
        averageSalary /= salariesArr.length;

        obj.bestSalary = bestSalary;
        obj.averageSalary = averageSalary;
      }
    }

    let winnerRestaurant = list[0];
    let highestSalary = list[0].averageSalary;
    for (let obj of list) {
      if (obj.averageSalary > highestSalary) {
        highestSalary = obj.averageSalary;
        winnerRestaurant = obj;
      }
    }

    let winnerRestaurantText = `Name: ${
      winnerRestaurant.name
    } Average Salary: ${winnerRestaurant.averageSalary.toFixed(
      2
    )} Best Salary: ${winnerRestaurant.bestSalary.toFixed(2)}
    `;
    let winnerWorkersText = "";
    let workersList = Object.entries(winnerRestaurant.workersObj).sort(
      (a, b) => b[1] - a[1]
    );
    for (let worker of workersList) {
      winnerWorkersText += `Name: ${worker[0]} With Salary: ${worker[1]} `;
    }
    bestRestaurant.textContent = winnerRestaurantText;
    bestWorkers.textContent = winnerWorkersText;
  }
}

//restaurants=[
//              name,
//              average salary (if 2 the same use first added)
//              bestSalary,
//              {name:salary}

//]
