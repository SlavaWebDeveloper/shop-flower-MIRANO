import { renderCart } from "./renderCart";
import { cartStore } from "./Store";

const cartOpenButton = document.querySelector('.header__cart-button');
const cartClose = document.querySelector('.cart__close');
const cart = document.querySelector('.cart');
const cartPriceTotal = document.querySelector('.cart__price_total');

const toogleCart = () => {
  cart.classList.toggle('cart_open');

  if (cart.classList.contains('cart_open') && window.innerWidth > 1360) {
    cart.scrollIntoView({ behavior: "smooth" });
  };
};

export const initCart = async () => {
  await cartStore.init();

  cartOpenButton.textContent = cartStore.getCart().length;

  renderCart();

  cartStore.subcribe(() => {
    const cart = cartStore.getCart();
    cartOpenButton.textContent = cart.length;

    const totalPriceValue = cart.reduce(
      (acc, product) =>
        acc += product.price * product.quantity,
      0,
    );
    cartPriceTotal.innerHTML = `${totalPriceValue}&nbsp;₽`;
  });

  cartOpenButton.addEventListener('click', toogleCart);

  cartClose.addEventListener('click', () => {
    cart.classList.remove('cart_open');
  });
};