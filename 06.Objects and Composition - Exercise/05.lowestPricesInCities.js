function lowestPriceInCities(data) {
  let result = {};
  for (let line of data) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);
    if (!result.hasOwnProperty(product)) {
      result[product] = {};
    }

    if (
      result[product]["price"] === undefined ||
      result[product]["price"] > price
    ) {
      result[product]["town"] = town;
      result[product]["price"] = price;
    }
  }

  for (let [product, productData] of Object.entries(result)) {
    console.log(`${product} -> ${productData.price} (${productData.town})`);
  }
}

lowestPriceInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
