function findNonDuplicate(arr) {
  const map = {};

  for (const ele of arr) {
    if (ele in map) {
      map[ele] += 1;
    } else {
      map[ele] = 1;
    }
  }
  return Object.keys(map)
    .filter((a) => map[a] == 1)
    .map(Number);
}

console.log(findNonDuplicate([11, 11, 2, 4, 5, 2]));
