import createCardsCart from "../modules/createCardsCart.js";
import getProductCarts from "../helpers/getDataCart.js";
import createCart from "../modules/createCart.js";

let cartProducts = JSON.parse(sessionStorage.getItem("arrayCart")) || [];

document.addEventListener("click", async (event) => {
  let url = "https://pro-talento.up.railway.app/api/mindy/products";
  console.log("cliccccc");

  const { target } = event;
  if (target.classList.contains("addToCart")) {
    const idProducto = target.name;
    const urlPropertyFavorite = `${url}/${idProducto}`;
    const producto = await getProductCarts(urlPropertyFavorite);

    // Verificar si el producto ya existe en el carrito
    const existingProduct = cartProducts.find(
      (product) => product.nombre === producto.product.nombre
    );

    if (!existingProduct) {
      cartProducts.push(producto.product);
      console.log(producto.product);
      console.log(idProducto);
      sessionStorage.setItem("arrayCart", JSON.stringify(cartProducts));
    }
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault;
  const arrayProductos = sessionStorage.getItem("arrayCart")
    ? JSON.parse(sessionStorage.getItem("arrayCart"))
    : [];
  console.log(arrayProductos);
  createCardsCart(arrayProductos);
  createCart(arrayProductos);
});












