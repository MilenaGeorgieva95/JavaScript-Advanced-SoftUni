class List {
  constructor() {
    this.collection = [];
    this.size = 0;
  }

  add(element) {
    this.collection.push(element);
    this.collection.sort((a, b) => a - b);
    this.size++;
  }
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid Index");
    }
    this.collection.splice(index, 1);
    this.size--;
  }
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid Index");
    }
    return this.collection.slice(index, index + 1)[0];
  }
}
