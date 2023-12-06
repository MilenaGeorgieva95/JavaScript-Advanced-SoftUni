function format() {
  const text = document.querySelector("#input").value;
  let output = document.querySelector("#output");

  const pattern = /[^.][^.]*/g;
  let sentencesArr = text.match(pattern);
  if (sentencesArr) {
    sentencesArr = sentencesArr.map((el) => el.trimStart());

    for (let i = 0; i < sentencesArr.length; i += 3) {
      let paragraphText = sentencesArr[i].trimStart() + ".";
      if (i + 1 < sentencesArr.length) {
        paragraphText += sentencesArr[i + 1].trimStart() + ".";
      }
      if (i + 2 < sentencesArr.length) {
        paragraphText += sentencesArr[i + 2].trimStart() + ".";
      }

      let newP = document.createElement("p");
      newP.textContent = paragraphText;
      output.appendChild(newP);
    }
  }
}
