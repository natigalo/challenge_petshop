import createCards from "../modules/createCards.js";

async function getProduct() {
  let url = "https://pro-talento.up.railway.app/api/mindy/products";
  try {
    let response = await fetch(url);
    response = await response.json();
    response = response.products;
    createCards(response);
  } catch (error) {
    console.log(error);
  }
}

export default getProduct;
