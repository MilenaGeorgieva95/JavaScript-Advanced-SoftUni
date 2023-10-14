class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }
    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
    }
    this.departments[department].push([name, salary, position]);
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    let bestAverage = 0;
    let bestDepartment = "";
    for (let department in this.departments) {
      let sum = 0;
      for (let employee of this.departments[department]) {
        sum += employee[1];
      }
      let average = sum / this.departments[department].length;
      if (bestAverage <= average) {
        bestAverage = average;
        bestDepartment = department;
      }
    }
    let result = [
      `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverage.toFixed(
        2
      )}`,
    ];
    this.departments[bestDepartment].sort((a, b) => {
      if (b[1] - a[1] === 0) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    });

    for (let employee of this.departments[bestDepartment]) {
      result.push(`${employee[0]} ${employee[1]} ${employee[2]}`);
    }
    return result.join("\n");
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
