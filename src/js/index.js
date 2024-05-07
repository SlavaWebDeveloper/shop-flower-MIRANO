import '@/scss/index.scss';
import { initFixerHeader } from '@/js/modyles/fixerHeader';
import { initChoices } from './modyles/choices';
import { initCart } from './modyles/cart';
import { renderProducts } from './modyles/renderProducts';

const init = () => {
  initFixerHeader();
  initChoices();
  initCart();
  renderProducts();
};

init();
document.addEventListener('DOMContentLoaded', () => init);