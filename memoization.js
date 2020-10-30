function memoize(fn) {
  var cache = {};

  return function (...args) {
    const item = args[0];
    if (cache[item]) {
      console.log("From Cache");
      return cache[item];
    } else {
      result = fn(args);
      cache[item] = result;
      return result;
    }
  };
}

const fact = memoize((n) => {
  return n < 1 ? 1 : n * fact(n - 1);
});

console.log(fact(6));
console.log(fact(7));
