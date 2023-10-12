function people() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.tasks = [];
      this.salary = 0;
      this.i = 0;
    }
    work() {
      if (this.i >= this.tasks.length) {
        this.i = 0;
      }
      console.log(`${this.tasks[this.i]}`);
      this.i++;
    }
    collectSalary() {
      console.log(`${this.name} received ${this._salary} this month.`);
    }
    get salary() {
      return this._salary;
    }
    set salary(num) {
      this._salary = num;
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(`${this.name} is working on a simple task.`);
    }
  }

  Object.setPrototypeOf(Junior.prototype, Employee.prototype);

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`
      );
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks.push(
        `${this.name} scheduled a meeting.`,
        `${this.name} is preparing a quarterly report.`
      );
    }
    collectSalary() {
      console.log(
        `${this.name} received ${this._salary + this._dividend} this month.`
      );
    }
    get dividend() {
      return this._dividend;
    }
    set dividend(num) {
      this._dividend = num;
    }
  }
  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}

const classes = people();
const junior = new classes.Junior("Ivan", 25);
console.log(junior);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior("Alex", 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager("Tom", 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
