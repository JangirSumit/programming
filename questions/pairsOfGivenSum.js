function getPairs(arr, sum) {
  const map = new Set();
  const pairs = new Map();

  for (const el of arr) {
    if (map.has(sum - el)) {
      pairs.set(sum - el, el);
      map.delete(sum - el);
    }
    map.add(el);
  }

  return pairs;
}

const arr = [1,8,5,6,3,12,-1];
const sum = 11;

const pairs = getPairs(arr, sum);
console.log(pairs);