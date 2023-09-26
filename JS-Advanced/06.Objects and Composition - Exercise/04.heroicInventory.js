function heroicInventory(dataArr) {
  let result = [];

  for (let hero of dataArr) {
    let [name, ...tokens] = hero.split(" / ");
    let level = Number(tokens[0]);

    let tempHero = {
      name,
      level,
      items: [],
    };
    if (tokens[1]) {
      tempHero.items = tokens[1].split(", ");
    }

    result.push(tempHero);
  }
  return JSON.stringify(result);
}

console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1",
  ])
);
