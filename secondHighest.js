function secondHighest(arr) {
  let max = -Infinity;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  let firstMax = max;
  max = -Infinity;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max && arr[index] != firstMax) {
      max = arr[index];
    }
  }

  return max;
}

// Complexity : O(n)
console.log(secondHighest([60, 10, 8, 9, 11, 20, 99]));
