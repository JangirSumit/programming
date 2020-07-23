function missingNumbers(arr, brr) {
  let missing = [];
  let map = {};
  let map1 = {};

  for (let i = 0; i < brr.length; i++) {
    let prop = brr[i];
    if (map.hasOwnProperty(prop)) {
      map[prop] += 1;
    } else {
      map[prop] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let prop = arr[i];
    if (map1.hasOwnProperty(prop)) {
      map1[prop] += 1;
    } else {
      map1[prop] = 1;
    }
  }
  let k = Object.keys(map1);

  for (let i = 0; i < k.length; i++) {
    let key = k[i];
    console.log(`${map[key]} <> ${map1[key]}\n`);

    map[key] = map[key] - map1[key];
    if (map[key] <= 0) {
      delete map[key];
    }
  }
  console.log(map);
  console.log(map1);

  return Object.keys(map)
    .filter((a) => map[a] > 0)
    .sort((a, b) => a - b);
}
