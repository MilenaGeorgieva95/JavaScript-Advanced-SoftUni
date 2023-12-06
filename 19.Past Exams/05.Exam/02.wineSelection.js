class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(name, type, price) {
    if (this.space === 0) {
      throw new Error("Not enough space in the cellar.");
    }
    this.wines.push({
      wineName: name,
      wineType: type,
      price: price,
      paid: false,
    });
    this.space--;
    return `You reserved a bottle of ${name} ${type} wine.`;
  }

  payWineBottle(wineName, price) {
    let foundWine = this.wines.find((el) => el.wineName === wineName);
    if (!foundWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (foundWine.paid === true) {
      throw new Error(`${wineName} has already been paid.`);
    }
    foundWine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    let foundWine = this.wines.find((el) => el.wineName === wineName);
    if (!foundWine) {
      throw new Error(`The wine, you're looking for, is not found.`);
    }
    if (foundWine.paid === false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }

    let index = this.wines.indexOf(foundWine);
    this.wines.splice(index, 1);
    this.space++;
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    if (!wineType) {
      let text = `You have space for ${this.space} bottles more.`;
      text += `\nYou paid ${this.bill}$ for the wine.`;

      this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

      this.wines.forEach((el) => {
        text += `\n${el.wineName} > ${el.wineType} - `;
        text += el.paid === true ? "Has Paid." : "Not Paid.";
      });
      return text;
    }

    let searchedWine = this.wines.find((el) => el.wineType === wineType);
    if (!searchedWine) {
      throw new Error(`There is no ${wineType} in the cellar.`);
    }
    let text2 = `${searchedWine.wineName} > ${wineType} - `;
    text2 += searchedWine.paid === true ? "Has Paid." : "Not Paid.";
    return text2;
  }
}

const selection = new WineSelection(5);
selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144);
selection.payWineBottle("Bodegas Godelia Mencía", 144);
selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
console.log(selection.cellarRevision());
