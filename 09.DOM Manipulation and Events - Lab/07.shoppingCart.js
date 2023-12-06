function solve() {
  let shoppingCart = document.querySelector(".shopping-cart");
  let textarea = document.querySelector("textarea");
  let buttons = document.querySelectorAll("button");

  shoppingCart.addEventListener("click", (element) => {
    if (element.target.classList.contains("add-product")) {
      addProduct(element.target);
    }
    if (element.target.classList.contains("checkout")) {
      checkout(element.target);
    }
  });

  let productList = {};

  function addProduct(element) {
    let product = element.parentElement.parentElement;
    let name = product.querySelector(".product-title").textContent;
    let price = Number(
      product.querySelector(".product-line-price").textContent
    );
    let text = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    textarea.appendChild(document.createTextNode(text));
    if (productList.hasOwnProperty(name)) {
      productList[name] += price;
    } else {
      productList[name] = price;
    }
  }

  function checkout(element) {
    let list = Object.keys(productList).join(", ");
    let totalPrice = 0;
    let pricesArr = Object.values(productList);
    pricesArr.forEach((el) => (totalPrice += el));
    let text = `You bought ${list} for ${totalPrice.toFixed(2)}.`;
    textarea.appendChild(document.createTextNode(text));
    for (let button of buttons) {
      button.setAttribute("disabled", "true");
    }
  }
}
