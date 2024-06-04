import '@/scss/index.scss';
import { initFixerHeader } from '@/js/modules/fixerHeader';
import { initChoices } from './modules/choices';
import { initCart } from './modules/cart';
import { renderProducts } from './modules/renderProducts';
import { initChoicesType } from './modules/choicesType';
import { filterProducts } from './modules/filterProducts';
import { initSearchProducts } from './modules/searchProducts';
import { initOrder } from './modules/orderController';


const init = () => {
  initFixerHeader();
  initChoices();
  initChoicesType();
  initCart();
  initSearchProducts();
  renderProducts();
  filterProducts();
  initOrder();
};

init();

document.addEventListener('DOMContentLoaded', () => init);