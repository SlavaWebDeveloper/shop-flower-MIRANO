export const debounce = (fn, msec) => {
  let idTimeout;

  return (...args) => {
    clearInterval(idTimeout);
    idTimeout = setTimeout(() => {
      fn(...args);
    }, msec);
  };
};