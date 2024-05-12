export const initCart = () => {
  const cartOpenButton = document.querySelector('.header__cart-button');
  const cartClose = document.querySelector('.cart__close');
  const cart = document.querySelector('.cart');

  const toogleCart = () => {
    cart.classList.toggle('cart_open');

    if (cart.classList.contains('cart_open') && window.innerWidth > 1360) {
      cart.scrollIntoView({ behavior: "smooth" });
    };
  };

  cartOpenButton.addEventListener('click', toogleCart);

  cartClose.addEventListener('click', () => {
    cart.classList.remove('cart_open');
  })
}