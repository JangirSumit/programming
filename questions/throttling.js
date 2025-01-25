function throttling(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    let current = new Date().getTime();
    let context = this;
    if (current - lastCall > delay) {
      lastCall = current;
      fn.apply(context, args);
    }
  };
}

function throttle(fn, delay) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      inThrottle = true;
      fn.apply(this, args);

      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
}

function printSUmit(i) {
  console.log(i);
}

let throttledFunc = throttle(printSUmit, 1000);
let i = 0;
setInterval(() => {
  console.log("Inside set interval");
  throttledFunc(i++);
}, 500);
