function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    let current = new Date().getTime();

    if (current - lastCall > delay) {
      lastCall = now;
      fn(args);
    }
  };
}
