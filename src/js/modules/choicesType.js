import { ListType } from "../ListType";
import { productStore } from "./Store";

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');
  const choicesBox = document.querySelector('.filter__choices-box_type');

  const updateTypeChoicesVisibility = () => {

    const categories = productStore.getCategories();

    if (categories.size) {
      const listType = ListType([...categories]);
      typeChoices.style.display = '';
      choicesBox.textContent = "";
      choicesBox.append(listType);    
    } else {
      typeChoices.style.display = 'none';
    }

  };
  productStore.subcribe(updateTypeChoicesVisibility);

  updateTypeChoicesVisibility();
}