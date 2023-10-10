class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    let candidatesList = [];
    for (let candidate of candidates) {
      let [name, education, yearsExp] = candidate.split("-");
      if (!candidatesList.includes(name)) {
        candidatesList.push(name);
      }

      yearsExp = Number(yearsExp);
      let itExists = this.jobCandidates.find((el) => el.name === name);
      if (itExists && itExists.yearsExp < yearsExp) {
        itExists.yearsExp = yearsExp;
      } else {
        let tempObj = {
          name,
          education,
          yearsExp,
        };
        this.jobCandidates.push(tempObj);
      }
    }

    return `You successfully added candidates: ${candidatesList.join(", ")}.`;
  }

  jobOffer(chosenPerson) {
    let [name, minExp] = chosenPerson.split("-");
    minExp = Number(minExp);
    let isFound = this.jobCandidates.find((el) => el.name === name);
    if (!isFound) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    if (isFound.yearsExp < minExp) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minExp} years.`
      );
    }
    isFound.yearsExp = "hired";
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    let isAvailable = this.jobCandidates.find((el) => el.name === name);
    if (!isAvailable) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    if (isAvailable.education === "Bachelor") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    }
    if (isAvailable.education === "Master") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    }
    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
  }

  candidatesDatabase() {
    if (this.jobCandidates.length === 0) {
      throw new Error("Candidate Database is empty!");
    }
    this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
    let result = [];

    this.jobCandidates.forEach((el) =>
      result.push(el.name + "-" + el.yearsExp)
    );
    return "Candidates list:\n" + result.join("\n");
  }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(
  Jobs.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Jordan Cole-High School-5",
    "Daniel Jones- Bachelor-18",
  ])
);
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
