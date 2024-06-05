export const debounce = (fn, msec) => {
  let idTimeout;

  return (...args) => {
    clearTimeout(idTimeout);
    idTimeout = setTimeout(() => {
      fn(...args);
    }, msec);
  };
};