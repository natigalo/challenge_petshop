import createCards from "../modules/createCards.js";

async function getProduct(url) {
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
