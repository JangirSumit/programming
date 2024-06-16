function memoize(fn) {
  var cache = {};

  return function (key) {
    if (key in cache) {
      return cache[key];
    } else {
      let result = fn(key);
      cache[key] = result;
      return result;
    }
  };
}
//******************* */
//React.memo(Component)

//HOC

async function sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

console.log("hello");
await sleep(2000);
console.log("World");
