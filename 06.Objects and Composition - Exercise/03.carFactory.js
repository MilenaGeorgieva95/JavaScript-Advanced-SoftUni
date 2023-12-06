function carFactory(orderedCar) {
  let resultModel = {
    model: orderedCar.model,
  };

  let engineType = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
  };
  if (orderedCar.power <= 90) {
    resultModel.engine = engineType["Small engine"];
  } else if (orderedCar.power <= 120) {
    resultModel.engine = engineType["Normal engine"];
  } else {
    resultModel.engine = engineType["Monster engine"];
  }

  resultModel.carriage = {
    type: orderedCar.carriage,
    color: orderedCar.color,
  };

  let wheelSize = orderedCar.wheelsize;

  if (wheelSize % 2 === 0) {
    wheelSize -= 1;
  }

  resultModel.wheels = new Array(4).fill(wheelSize);
  return resultModel;
}

console.table(
  carFactory({
    model: "Ferrari",
    power: 200,
    color: "red",
    carriage: "coupe",
    wheelsize: 21,
  })
);
