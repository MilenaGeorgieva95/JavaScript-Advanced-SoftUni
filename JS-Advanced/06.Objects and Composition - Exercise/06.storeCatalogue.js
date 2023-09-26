function storeCatalogue(input) {
  let result = [];
  for (let line of input) {
    let [product, price] = line.split(" : ");
    let template = {
      product,
      price,
      firstLetter: product[0],
    };
    result.push(template);
  }
  result.sort((a, b) => a.product.localeCompare(b.product));
  let currentLetter = result[0].firstLetter;
  console.log(currentLetter);

  for (let obj of result) {
    if (obj.firstLetter !== currentLetter) {
      currentLetter = obj.firstLetter;
      console.log(currentLetter);
    }
    console.log(`  ${obj.product}: ${obj.price}`);
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
