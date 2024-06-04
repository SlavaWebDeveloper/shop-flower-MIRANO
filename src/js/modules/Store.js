import { API_URL } from "./API";

class Store {
  constructor() {
    this.observers = [];
  };

  subcribe(observerFunction) {
    this.observers.push(observerFunction);
  };

  notifyObservers() {
    this.observers.forEach(observer => observer());
  };
}

class ProductStore extends Store {
  constructor() {
    super();
    this.products = [];
    this.categories = new Set();
  };

  getProducts() {
    return this.products;
  };

  setProducts(newProducts) {
    this.products = newProducts;
    this.updateCategories(newProducts);
    this.notifyObservers();
  };

  getCategories() {
    return this.categories;
  };

  updateCategories(products) {
    this.categories.clear();

    products.forEach((product) => {
      if (product.categories) {
        product.categories.forEach((category) => {
          this.categories.add(category);
        })
      }
    });
    this.notifyObservers();
  };
}

class CartStore extends Store {
  constructor() {
    super();
    this.cart = [];
  }

  async init() {
    await this.registerCart();
    await this.fetchCart();
  }

  async registerCart() {
    try {
      const respone = await fetch(`${API_URL}/api/cart/register`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!respone.ok) {
        throw new Error(`HTTP error! Status: ${respone.status}`);
      }
    } catch (error) {
      console.error(error);
    }

  }
  getCart() {
    return this.cart;
  }

  async fetchCart() {
    try {
      const respone = await fetch(`${API_URL}/api/cart`, {
        method: 'GET',
        credentials: 'include'
      });

      if (!respone.ok) {
        throw new Error(`HTTP error! Status: ${respone.status}`);
      }

      const data = await respone.json();
      this.cart = data;
      this.notifyObservers();

    } catch (error) {
      console.error(error);
    }
  }

  async postCart({ id, quantity }) {
    try {
      const respone = await fetch(`${API_URL}/api/cart/items`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId: id, quantity }),
      });

      if (!respone.ok) {
        throw new Error(`HTTP error! Status: ${respone.status}`);
      }

      const data = await respone.json();
      this.cart = data;
      this.notifyObservers();

    } catch (error) {
      console.error(error);
    }
  }

  async addProductCart(id) {
    await this.postCart({ id, quantity: 1 });
  }

  clearCart() {
    this.cart = [];
    this.notifyObservers();
  }
}

export const productStore = new ProductStore();
export const cartStore = new CartStore();
