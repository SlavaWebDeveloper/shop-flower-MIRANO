import { store } from "./Store";

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


export const API_URL = 'http://localhost:3000';

export const fetchProducts = async (params = {}) => {
  try {
    const respone = await fetch(`${API_URL}/api/products${formatQueryString(params)}`);
    if (!respone.ok) {
      throw new Error(`HTTP error! status: ${respone.status}`);
    }

    const products = await respone.json();

    store.setProducts(products);
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
    return [];
  }
};