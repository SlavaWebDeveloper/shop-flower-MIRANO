import { debounce } from "./debounce";
import { productStore } from "./Store";

const adjustElementPosition = (elementBox, count = 0) => {
  const rect = elementBox.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const postRect = elementBox.getBoundingClientRect();

  if (rect.left < 0) {
    elementBox.style.left = "0";
    elementBox.style.right = "auto";
    elementBox.style.transform = "translateX(0)";

  } else if (rect.right > viewportWidth) {

    elementBox.style.left = "auto";
    elementBox.style.right = "0";
    elementBox.style.transform = "translateX(0)";

  } else {

    elementBox.style.left = "50%";
    elementBox.style.right = "auto";
    elementBox.style.transform = "translateX(-50%)";

  }

  if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
    count++;
    adjustElementPosition(elementBox, count);
  }
}

export const initChoices = () => {
  const choices = document.querySelectorAll('.choices');

  const closeAllChoices = ({ target }) => {
    let clickInside = target.closest('.choices');

    if (!clickInside) {
      choices.forEach(choice => {
        choice
          .querySelector('.choices__box')
          .classList.remove('choices__box_open');
      });
      document.addEventListener('click', closeAllChoices);
    }
  };

  choices.forEach((choice) => {
    const choicesBtn = choice.querySelector('.choices__btn');
    const choicesBox = choice.querySelector('.choices__box');

    choicesBtn.addEventListener('click', () => {
      choicesBox.classList.toggle('choices__box_open');

      choices.forEach((otherChoice => {
        if (otherChoice !== choice) {
          otherChoice
            .querySelector('.choices__box')
            .classList.remove('choices__box_open')
        }
      }))

      if (choicesBox.classList.contains('choices__box_open')) {
        document.addEventListener('click', closeAllChoices);
      } else {
        document.removeEventListener('click', closeAllChoices);
      }

      adjustElementPosition(choicesBox);
    });

    window.addEventListener(
      'resize',
      debounce(() => {
        adjustElementPosition(choicesBox)
      })
    );

    productStore.subcribe(() => adjustElementPosition(box))
  })
};