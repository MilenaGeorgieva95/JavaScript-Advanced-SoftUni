class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }
  addItem(name, qty) {
    if (qty <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    if (this.capacity <= this.items.length) {
      throw new Error("The inventory is already full.");
    }
    let existingItem = this.items.find((el) => el[0] === name);
    if (existingItem) {
      existingItem[1] += qty;
    } else {
      this.items.push([name, qty]);
    }
    if (this.outOfStock.includes(name)) {
      let index = this.outOfStock.indexOf(name);
      this.outOfStock.splice(index, 1);
    }
    return `Added ${qty} ${name}(s) to the inventory.`;
  }
  sellItem(name, qty) {
    if (qty <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    let existingItem = this.items.find((el) => el[0] === name);
    if (!existingItem) {
      throw new Error(`The item ${name} is not available in the inventory.`);
    } else if (existingItem[1] < qty) {
      throw new Error(`Not enough ${name}(s) in stock.`);
    } else if (existingItem[1] === qty) {
      this.outOfStock.push(existingItem[0]);
      let index = this.items.indexOf(existingItem);
      this.items.splice(index, 1);
    } else {
      existingItem[1] -= qty;
    }
    return `Sold ${qty} ${name}(s) from the inventory.`;
  }
  restockItem(name, qty) {
    if (qty <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    let existingItem = this.items.find((el) => el[0] === name);
    if (existingItem) {
      existingItem[1] += qty;
    } else {
      this.items.push([name, qty]);
    }
    if (this.outOfStock.includes(name)) {
      let index = this.outOfStock.indexOf(name);
      this.outOfStock.splice(index, 1);
    }
    return `Restocked ${qty} ${name}(s) in the inventory.`;
  }
  getInventorySummary() {
    let result = ["Current Inventory:"];
    this.items.forEach((el) => result.push(`${el[0]}: ${el[1]}`));
    if (this.outOfStock.length > 0) {
      result.push("Out of Stock: " + this.outOfStock.join(", "));
    }

    return result.join("\n");
  }
}

let myManager = new InventoryManager(2);

myManager.addItem("Hammer", 10);
myManager.sellItem("Hammer", 10);
myManager.restockItem("Chisel", 5);
myManager.restockItem("Drill", 1);
console.log(myManager.getInventorySummary());
