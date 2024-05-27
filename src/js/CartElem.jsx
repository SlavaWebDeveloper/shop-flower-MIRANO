import { API_URL } from "./modules/API"
import { cartStore } from "./modules/Store"

export const CartElem = (product) => (
  <li class="cart__item">
    <img
      src={`${API_URL}${product.photoUrl}`}
      alt={product.name}
      class="cart__image"
      width="54"
      height="54"
      loading="lazy"
    />

    <h4 class="cart__item-title">
      {product.name}
    </h4>

    <div class="cart__counter">
      <button
        class="cart__counter-btn"
        onClick={() => {
          cartStore.postCart({
            id: product.id,
            quantity: product.quantity - 1,
          });
        }}
        type="button"
      >-</button>
      <input
        class="cart__counter-input"
        type="number"
        min="0"
        max="99"
        value={product.quantity}
      />
      <button
        class="cart__counter-btn"
        onClick={() => {
          cartStore.postCart({
            id: product.id,
            quantity: product.quantity + 1,
          });
        }}
        type="button"
      >+</button>
    </div>
    <p class="cart__price">{product.price * product.quantity}&nbsp;₽</p>
  </li>
)