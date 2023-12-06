function playingCards(arrCards) {
  const validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const validSuits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };

  let hasInvalidcard = false;
  let result = [];
  for (let card of arrCards) {
    let cardArr = card.split("");
    let suit = cardArr.pop();
    let face = cardArr.join("");
    if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) {
      hasInvalidcard = true;
      console.log(`Invalid card: ${card}`);
    }
    result.push(`${face}${validSuits[suit]}`);
  }

  if (!hasInvalidcard) {
    console.log(result.join(" "));
  }
}

let card = playingCards(["5S", "3D", "QD", "1C"]);
