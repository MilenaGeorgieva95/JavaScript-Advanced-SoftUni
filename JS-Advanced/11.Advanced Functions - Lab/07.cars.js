function cars(arrayOfCommands) {
  let carsRegister = {};

  const utilityObj = {
    create,
    createInherit,
    set,
    print,
  };

  arrayOfCommands.forEach((cmd) => {
    const cmdArgs = cmd.split(" ");
    const command = cmdArgs[0];
    const name = cmdArgs[1];

    switch (command) {
      case "create":
        if (cmdArgs[2]) {
          const parentObjName = cmdArgs[3];
          utilityObj.createInherit(name, parentObjName);
        } else {
          utilityObj.create(name);
        }

        break;
      case "set":
        const key = cmdArgs[2];
        const value = cmdArgs[3];
        utilityObj.set(name, key, value);
        break;
      case "print":
        utilityObj.print(name);
        break;
    }
  });

  function create(name) {
    carsRegister[name] = {};
  }

  function createInherit(name, parentObjName) {
    let parentObj = carsRegister[parentObjName];
    carsRegister[name] = Object.create(parentObj);
  }

  function set(name, key, val) {
    carsRegister[name][key] = val;
  }

  function print(name) {
    let print = [];
    const carToPrint = carsRegister[name];
    for (const key in carToPrint) {
      print.push(`${key}:${carToPrint[key]}`);
    }

    console.log(print.join(","));
  }
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
