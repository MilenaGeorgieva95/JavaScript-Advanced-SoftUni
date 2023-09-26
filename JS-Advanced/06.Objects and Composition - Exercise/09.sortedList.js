function createSortedList() {
  return {
    collection: [],
    size: 0,
    add: function (item) {
      this.collection.push(item);
      this.collection.sort((a, b) => a - b);
      this.size++;
      return this.collection;
    },
    remove: function (index) {
      if (index >= 0 && index < this.collection.length) {
        this.collection.splice(index, 1);
        this.size--;
      }
    },
    get: function (index) {
      return this.collection[index];
    },
  };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list["size"]);
