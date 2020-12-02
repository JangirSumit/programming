function findDuplicate(arr) {
  const set = new Set();
  const duplicateEles = [];

  for (const ele of arr) {
    if (set.has(ele)) {
      duplicateEles.push(ele);
    } else {
      set.add(ele);
    }
  }

  return duplicateEles;
}

console.log(findDuplicate([1, 1, 3, 5, 2, 2]));
