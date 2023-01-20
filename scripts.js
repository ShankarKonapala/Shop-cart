
let cartCount = 0

const cart = document.getElementById("cart-count");
// const addToCart = document.getElementByClassName("add-cart");
var cardId = "add-cart";

function myFunction() {
  ++cartCount;
  cart.innerHTML = cartCount;
}

function myFunction2(){
  document.getElementsByClassName(cardId)[0].style.display = "block";
}
