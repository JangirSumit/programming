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

function secondHighestApproach2(arr) {
  let max = -Infinity,
    secMax = -Infinity;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element > max) {
      secMax = max;
      max = element;
    } else if (element != max && element > secMax) {
      secMax = element;
    }
  }

  return secMax;
}

// Complexity : O(n)
console.log(secondHighest([99, 10, 8, 9, 11, 60, 20, 99, -1]));
console.log(secondHighestApproach2([99, 10, 8, 9, 11, 60, 20, 99, -1]));
