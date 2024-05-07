import { ProductCard } from "../ProductCard";
import { fetchProducts } from "./API.js";

export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');
  const products = await fetchProducts();

  goodsList.innerHTML = "";
  const productCards = products.map(product => ProductCard(product));

  goodsList.append(...productCards);

  // products.forEach((product) => {
  // const productCard = ProductCard(product);
  // goodsList.append(productCard)
  // })
}