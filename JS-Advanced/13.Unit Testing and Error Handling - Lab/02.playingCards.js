function playingCards(face, suit) {
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

  if (!validFaces.includes(face)) {
    throw new TypeError("Invalid face");
  }
  if (!validSuits.hasOwnProperty(suit)) {
    throw new TypeError("Invalid suit");
  }

  return {
    face,
    suit,
    toString() {
      return this.face + validSuits[this.suit];
    },
  };
}

let card = playingCards("A", "S");
console.log(card.toString());
