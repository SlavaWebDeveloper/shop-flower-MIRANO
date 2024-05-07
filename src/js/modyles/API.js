export const API_URL = 'http://localhost:3000';

export const fetchProducts = async () => {
  try {
    const respone = await fetch(`${API_URL}/api/products`);
    if (!respone.ok) {
      throw new Error(`HTTP error! status: ${respone.status}`);
    }

    const data = respone.json();

    return data;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
    return [];
  }
};