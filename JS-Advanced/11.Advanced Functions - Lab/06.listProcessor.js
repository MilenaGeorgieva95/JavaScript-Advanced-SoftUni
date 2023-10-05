function listProcessor(input) {
  let collection = [];

  const obj = {
    add(str) {
      collection.push(str);
    },
    remove(str) {
      collection = collection.filter((el) => el !== str);
    },
    print() {
      console.log(collection.join(","));
    },
  };

  input.forEach((el) => {
    if (el === "print") {
      obj.print();
    } else {
      let [command, value] = el.split(" ");
      switch (command) {
        case "remove":
          obj.remove(value);
          break;
        case "add":
          obj.add(value);
          break;
      }
    }
  });
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
