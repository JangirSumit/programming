/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  let result = 0;
  for (const key in map) {
    if (map[key] > 1) {
      result += fact(map[key]) / (2 * fact(map[key] - 2));
    }
  }
  return result;
};

function memoize(fn) {
  var cache = {};

  return function (...args) {
    const item = args[0];
    if (cache[item]) {
      //console.log("From Cache");
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
