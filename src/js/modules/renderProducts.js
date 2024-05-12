import { ProductCard } from "../ProductCard";
import { store } from "./Store.js";

export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');
  const updateList = () => {
    const products = store.getProducts();
    goodsList.innerHTML = "";

    products.forEach((product) => {
      const productCard = ProductCard(product);
      goodsList.append(productCard)
    })
  };

  store.subcribe(updateList);
  updateList();
  // const products = await fetchProducts();
  // const productCards = products.map(product => ProductCard(product));
  // goodsList.append(...productCards);
  // products.forEach((product) => {
  //   const productCard = ProductCard(product);
  //   goodsList.append(productCard)
  // })
}