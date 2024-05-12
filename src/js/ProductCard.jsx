import { API_URL } from "./modules/API"

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

            <button class="card__button" type="button">
              <span class="icon"></span>
              <span class="icon"></span>
              <span class="icon"></span>
              <span class="icon"></span>

              <div class="card__price">{product.price}&nbsp;₽</div>
              <div class="card__button-text">в&nbsp;корзину</div>
            </button>
          </div>
        </div>
      </article>
    </li>
  )
}
