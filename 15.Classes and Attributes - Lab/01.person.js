class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

//join calls toString() and our toString is executed
const personOne = new Person("John", "Smith", 23, "abv@abv.bg");
const personTwo = new Person("John", "Smith", 23, "abv@abv.bg");
const personThree = new Person("John", "Smith", 23, "abv@abv.bg");
let arr = [personOne, personTwo, personThree];

console.log(arr.join("\n"));
