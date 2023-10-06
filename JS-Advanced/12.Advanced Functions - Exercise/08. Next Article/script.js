function getArticleGenerator(articles) {
  let resultArea = document.getElementById("content");
  let array = JSON.parse(JSON.stringify(articles));

  return () => {
    let newArticleText = array.shift();
    if (newArticleText) {
      let newArticle = document.createElement("article");
      newArticle.textContent = newArticleText;
      resultArea.appendChild(newArticle);
    }
  };
}
