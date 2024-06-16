function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    if (timerId) {
      clearInterval(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}
