function juiceFlavours(data) {
  let fruitsList = [];
  let fruitsObj = {};
  for (let line of data) {
    let [fruit, qty] = line.split(" => ");
    qty = Number(qty);

    if (!fruitsObj.hasOwnProperty(fruit)) {
      fruitsObj[fruit] = [0, 0];
    }
    fruitsObj[fruit][0] += qty;
    while (fruitsObj[fruit][0] >= 1000) {
      fruitsObj[fruit][0] -= 1000;
      fruitsObj[fruit][1]++;
      if (!fruitsList.includes(fruit)) {
        fruitsList.push(fruit);
      }
    }
  }
  for (let fruit of fruitsList) {
    console.log(`${fruit} => ${fruitsObj[fruit][1]}`);
  }
}

juiceFlavours([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
