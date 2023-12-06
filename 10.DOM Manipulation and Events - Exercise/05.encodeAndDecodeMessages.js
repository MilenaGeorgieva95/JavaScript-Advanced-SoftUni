function encodeAndDecodeMessages() {
  const divs = document.querySelectorAll("main div");
  const firstDiv = divs[0];
  const firstDivButton = firstDiv.querySelector("button");
  const firstTextarea = firstDiv.querySelector("textarea");
  firstDivButton.addEventListener("click", encode);

  const secondDiv = divs[1];
  const secondDivButton = secondDiv.querySelector("button");
  const secondTextarea = secondDiv.querySelector("textarea");
  secondDivButton.addEventListener("click", decode);

  function encode() {
    const text = firstTextarea.value;
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      let newChar = String.fromCharCode(char + 1);
      result += newChar;
    }
    secondTextarea.value = result;
    firstTextarea.value = "";
  }
  function decode() {
    const text = secondTextarea.value;
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      let newChar = String.fromCharCode(char - 1);
      result += newChar;
    }
    secondTextarea.value = result;
  }
}
