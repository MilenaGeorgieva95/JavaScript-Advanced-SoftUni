function extract(id) {
  let text = document.querySelector("#" + id).innerText;

  let pattern = /\([\w ]+\)/g;
  let matches = text.match(pattern);
  if (matches) {
    return matches.join("; ");
  }
}
