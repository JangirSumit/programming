function domions(A) {
  const map = new Map();

  map.set("12", 1);
  map.set("23", 1);
  map.set("34", 2);
  map.set("45", 1);
  map.set("56", 1);

  let pairs = A.reduce(function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  for (let i = 0; i < pairs.length; i++) {
    console.log(`${pairs[i]} ${map.get(pairs[i])}`);
    let p = pairs[i].join("");
    let r = pairs[i].reverse().join("");
    if (map.has(p) && map.get(p) > 0) {
      map.set(p, map.get(p) - 1);
    }

    console.log(`${pairs[i].reverse()} ${map.has(pairs[i].reverse())}`);

    if (map.has(r) && map.get(r) > 0) {
      map.set(r, map.get(r) - 1);
    }
  }

  let result = "YES";

  map.forEach((val) => {
    console.log(val);
    if (val != 0) {
      result = "NO";
    }
  });

  return result;
}

console.log(domions([4, 3, 3, 4, 1, 2, 2, 3, 6, 5, 4, 5]));
