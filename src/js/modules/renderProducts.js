import { ProductCard } from "../ProductCard";
import { store } from "./Store.js";

export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');
  const updateList = () => {
    const products = store.getProducts();
    goodsList.innerHTML = "";

    if (products.length === 0) {
      const messageItem = document.createElement('li');
      messageItem.textContent = 'Товары не найдены'
      messageItem.classList.add('goods__no-product');
      goodsList.append(messageItem);
      return;
    }
    
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