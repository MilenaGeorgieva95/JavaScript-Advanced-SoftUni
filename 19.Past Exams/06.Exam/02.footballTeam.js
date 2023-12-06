class footballTeam {
  constructor(clubName, country) {
    (this.clubName = clubName),
      (this.country = country),
      (this.invitedPlayers = []);
  }
  newAdditions(playersArr) {
    let result = [];
    for (let player of playersArr) {
      let [name, age, value] = player.split("/");
      value = Number(value);
      age = Number(age);
      let foundPlayer = this.invitedPlayers.find((el) => el.name === name);
      if (!foundPlayer) {
        this.invitedPlayers.push({ name, age, value });
        result.push(name);
      } else {
        if (foundPlayer.value < value) {
          foundPlayer.value = value;
        }
        if (!result.includes(name)) {
          result.push(name);
        }
      }
    }
    return `You successfully invite ${result.join(", ")}.`;
  }
  signContract(player) {
    let [name, offer] = player.split("/");
    offer = Number(offer);
    let plFound = this.invitedPlayers.find((el) => el.name === name);
    if (!plFound) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (plFound.value > offer) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${
          plFound.value - offer
        } million more are needed to sign the contract!`
      );
    }
    plFound.value = "Bought";
    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }

  ageLimit(name, age) {
    let foundP2 = this.invitedPlayers.find((el) => el.name === name);
    if (!foundP2) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (age - foundP2.age > 5) {
      return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    }
    if (age - foundP2.age <= 0) {
      return `${name} is above age limit!`;
    }
    if (age - foundP2.age < 5) {
      return `${name} will sign a contract for ${
        age - foundP2.age
      } years with ${this.clubName} in ${this.country}!`;
    }
  }

  transferWindowResult() {
    let text2 = "Players list:";
    this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

    this.invitedPlayers.forEach(
      (el) => (text2 += `\nPlayer ${el.name}-${el.value}`)
    );
    return text2;
  }
}
