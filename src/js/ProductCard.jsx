import { API_URL } from "./modules/API"
import { cartStore } from "./modules/Store";

export const ProductCard = (product) => {
  return (
    <li class="goods__item">
      <article class="goods__card card">
        <img
          src={`${API_URL}${product.photoUrl}`}
          alt={product.name}
          class="card__image"
          width="310"
          height="359"
          loading="lazy"
        />

        <div class="card__content">
          <h3 class="card__title">
            {product.name}
          </h3>

          <div class="card__footer">
            <p class="card__date">сегодня в 14:00</p>

            <button
              class="card__button"
              type="button"
              onMouseEnter={(e) => {
                const priceNode = e.currentTarget.querySelector('.card__price');
                if (priceNode) {
                  priceNode.textContent = "В корзину";
                }
              }}
              onMouseLeave={(e) => {
                const priceNode = e.currentTarget.querySelector('.card__price');
                if (priceNode) {
                  priceNode.textContent = `${product.price} ₽`;
                };
              }}
              onClick={() => {
                cartStore.addProductCart(product.id);
              }}
            >
              <span class="icon"></span>
              <span class="icon"></span>
              <span class="icon"></span>
              <span class="icon"></span>
              <span class="card__price">{product.price}&nbsp;₽</span>
            </button>
          </div>
        </div>
      </article>
    </li >
  )
}
