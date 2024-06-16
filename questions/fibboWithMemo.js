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
    const key = JSON.stringify(item);
    if (cache[item]) {
      //console.log("From Cache ", item);
      return cache[item];
    } else {
      result = fn(item);
      cache[item] = result;
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

for (let i = 0; i <= 10; i++) {
  console.log(memoFibbo(i));
}
