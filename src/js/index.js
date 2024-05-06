const header = document.querySelector('.header');
const body = document.body;
let headerHeight = header.offsetHeight;

window.addEventListener('resize', () => {
  headerHeight = header.offsetHeight;
});

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;

  if (scrollDistance > 200) {
    header.classList.add('header_fixed');
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove('header_fixed');
    body.style.paddingTop = '0';
  }
});

const adjustElementPosition = (elementBox, count = 0) => {
  const rect = elementBox.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

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

  const postRect = elementBox.getBoundingClientRect();

  if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
    count++;
    adjustElementPosition(elementBox, count);
  }
}

const choices = document.querySelectorAll('.choices');

choices.forEach((choice) => {
  const choicesBtn = choice.querySelector('.choices__btn');
  const choicesBox = choice.querySelector('.choices__box');
  
  choicesBtn.addEventListener('click', () => {
    const choicesBoxOpen = document.querySelector('.choices__box_open');
    
    choicesBox.classList.toggle('choices__box_open');

    if (choicesBoxOpen) {
      choicesBoxOpen.classList.remove('choices__box_open');
    }

    adjustElementPosition(choicesBox);
  });

  window.addEventListener('resize', () => {
    adjustElementPosition(choicesBox);
  });
})