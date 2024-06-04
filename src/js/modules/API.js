import { productStore } from "./Store";

const formatQueryString = params => {
  if (Object.keys(params).length === 0) {
    return '';
  }

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  })

  return `?${searchParams.toString()}`
}


export const API_URL = 'https://upbeat-gorgeous-roll.glitch.me';

export const fetchProducts = async (params = {}) => {
  try {
    const respone = await fetch(`${API_URL}/api/products${formatQueryString(params)}`);
    if (!respone.ok) {
      throw new Error(`HTTP error! status: ${respone.status}`);
    }

    const products = await respone.json();

    productStore.setProducts(products);
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
    return [];
  }
};

export const sendOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}