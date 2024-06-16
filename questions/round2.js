//0 1 1 2 3 5 8 // O(1)

function memoize(fn) {
  let cache = new Map();
  return function (ele) {
    if (cache.has(ele)) {
      console.log("from cache");
      return cache.get(ele);
    } else {
      //find closest
      let result = fn(ele);
      cache.set(ele, result);
      console.log("new result");
      return result;
    }
  };
}

let findFibbo = memoize((n) => {
  let a = 0,
    b = 1,
    c = 1;
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  for (let index = 2; index < n; index++) {
    findFibbo();
  }

  return b;
});

console.log(findFibbo(10)); //O(n)
console.log(findFibbo(11)); //O(n)
