import { ProductCard } from "../ProductCard";
import { productStore } from "./Store.js";

export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');
  const updateList = () => {
    const products = productStore._products;
    goodsList.innerHTML = "";

    if (products.length === 0 && !productStore._loading) {
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

  productStore.subcribe(updateList);
  updateList();
}