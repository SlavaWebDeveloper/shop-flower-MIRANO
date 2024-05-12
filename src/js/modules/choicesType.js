import { store } from "./Store";

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');

  const updateTypeChoicesVisibility = () => {
    const category = store.getCategories();

    if (category.size) {
      typeChoices.style.display = '';
      // !todo обновить категории
      
    } else {
      typeChoices.style.display = 'none';
    }

  };
  store.subcribe(updateTypeChoicesVisibility);

  updateTypeChoicesVisibility();
}