function editElement(el, match, replacer) {
  let text = el.innerText;
  let newText = text.split(match).join(replacer);
  el.innerText = newText;
}
