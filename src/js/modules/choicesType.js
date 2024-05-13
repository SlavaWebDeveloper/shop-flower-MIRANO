import { ListType } from "../ListType";
import { store } from "./Store";

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');
  const choicesBox = document.querySelector('.filter__choices-box_type');

  const updateTypeChoicesVisibility = () => {

    const categories = store.getCategories();

    if (categories.size) {
      const listType = ListType([...categories]);
      typeChoices.style.display = '';
      choicesBox.textContent = "";
      choicesBox.append(listType);    
    } else {
      typeChoices.style.display = 'none';
    }

  };
  store.subcribe(updateTypeChoicesVisibility);

  updateTypeChoicesVisibility();
}