export const callBackWithPreload = async (elem, callback, ...params) => {
  const preload = document.createElement('div');

  preload.classList.add('preload');

  elem.append(preload);
  elem.style.position = 'relative';
  preload.style.display = 'flex';

  try {
    const result = await callback(...params);
    return result
  } finally {
    preload.style.display = 'none';
    preload.remove();
    elem.style.position = '';
  }
}
