import '@/scss/index.scss';
import { initFixerHeader } from '@/js/modyles/fixerHeader';
import { initChoices } from './modyles/choices';
import { initCart } from './modyles/cart';
import { renderProducts } from './modyles/renderProducts';
import { initChoicesType } from './modyles/choicesType';
import { filterProducts } from './modyles/filterProducts';

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