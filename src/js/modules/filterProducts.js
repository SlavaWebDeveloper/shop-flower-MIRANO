import { debounce } from "./debounce";
import { callBackWithPreload } from "./preload";
import { productStore } from "./Store";

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  const goodsSection = document.querySelector('.goods');
  const goodsTitle = goodsSection.querySelector('.goods__title');

  const applyFilters = () => {
    const formData = new FormData(filterForm);
    const type = formData.get('type');
    const minPrice = formData.get('minPrice');
    const maxPrice = formData.get('maxPrice');
    const params = {};

    if (type) params.type = type;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    callBackWithPreload(goodsSection, productStore.fetchProducts(), params);
  }

  const applyPriceFilters = debounce(applyFilters, 500);

  applyFilters();

  filterForm.addEventListener('input', (event) => {
    const target = event.target;

    if (target.name === 'type') {
      goodsTitle.textContent = target.labels[0].textContent;
      filterForm.minPrice.value = '';
      filterForm.maxPrice.value = '';
      applyFilters();
      return;
    }


    if (target.name === 'minPrice' || target.name === 'maxPrice') {
      applyPriceFilters();
    }
  })
}