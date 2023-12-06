function breakfastRobot(str) {
  let availableIngriedients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  return function (str) {
    const tokens = str.split(" ");
    switch (tokens[0]) {
      case "restock":
        return restock(tokens[1], Number(tokens[2]));
      case "prepare":
        return prepare(tokens[1], Number(tokens[2]));
      case "report":
        return report();
    }
  };

  function restock(microelement, qtyStock) {
    availableIngriedients[microelement] += qtyStock;
    return "Success";
  }
  function prepare(recipeName, qty) {
    let recipe = recipes[recipeName];
    for (let key in recipe) {
      if (availableIngriedients[key] < recipe[key] * qty) {
        return `Error: not enough ${key} in stock`;
      }
      availableIngriedients[key] -= recipe[key] * qty;
    }
    return "Success";
  }
  function report() {
    let print = `protein=${availableIngriedients.protein} carbohydrate=${availableIngriedients.carbohydrate} fat=${availableIngriedients.fat} flavour=${availableIngriedients.flavour}`;
    return print;
  }
}

let manager = breakfastRobot();
manager("restock carbohydrate 10"); // Success
manager("restock flavour 10"); // Success
manager("prepare apple 1"); // Success
manager("restock fat 10"); // Success
manager("prepare burger 1"); // Success
manager("report"); // Success

let manager1 = breakfastRobot();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
