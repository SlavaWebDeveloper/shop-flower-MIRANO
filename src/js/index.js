import '@/scss/index.scss';
import { initFixerHeader } from '@/js/modules/fixerHeader';
import { initChoices } from './modules/choices';
import { initCart } from './modules/cart';
import { renderProducts } from './modules/renderProducts';
import { initChoicesType } from './modules/choicesType';
import { filterProducts } from './modules/filterProducts';

const init = () => {
  initFixerHeader();
  initChoices();
  initChoicesType();
  initCart();
  renderProducts();
  filterProducts();
};

init();

document.addEventListener('DOMContentLoaded', () => init);