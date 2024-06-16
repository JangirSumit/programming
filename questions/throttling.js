function throttle(fn, delay) {
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

function printSUmit(i) {
  console.log(i);
}

let throttledFunc = throttle(printSUmit, 1000);
let i = 0;
setInterval(() => {
  console.log("Inside set interval");
  throttledFunc(i++);
}, 500);
