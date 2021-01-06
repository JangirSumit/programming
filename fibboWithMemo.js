// function fibbo(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibbo(n - 1) + fibbo(n - 2);
// }

// console.log(fibbo(10));

// function fibonacci(n, memo) {
//   memo = memo || {};
//   if (memo[n]) {
//     console.log("from memo ", n);
//     return memo[n];
//   }
//   if (n <= 1) {
//     return n;
//   }
//   return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
// }

// console.log(fibonacci(10));

function memoize(fn) {
  var cache = {};

  return function (item) {
    if (cache[item]) {
      console.log("From Cache ", item);
      return parseInt(cache[item]);
    } else {
      result = fn(item);
      cache[item] = parseInt(result);
      return result;
    }
  };
}

const memoFibbo = memoize((n) => {
  if (n <= 1) {
    return n;
  }

  return memoFibbo(n - 1) + memoFibbo(n - 2);
});

console.log(memoFibbo(10));
console.log(memoFibbo(11));
