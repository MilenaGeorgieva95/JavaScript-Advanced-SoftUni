function autoEngineeringCompany(data) {
  const brands = new Map();
  for (let line of data) {
    let [brand, model, qty] = line.split(" | ");
    qty = Number(qty);
    if (!brands.has(brand)) {
      let tempBrand = new Map();
      tempBrand.set(model, qty);
      brands.set(brand, tempBrand);
    } else {
      if (!brands.get(brand).has(model)) {
        brands.get(brand).set(model, qty);
      } else {
        let newQty = brands.get(brand).get(model) + qty;
        brands.get(brand).set(model, newQty);
      }
    }
  }

  for (let carBrand of brands) {
    console.log(carBrand[0]);
    for (let carModel of carBrand[1]) {
      console.log(`###${carModel[0]} -> ${carModel[1]}`);
    }
  }
}

autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Citroen | C4 | 22",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",

  "Citroen | C5 | 10",
]);
