function binarySearch(arr, ele) {
  let l = 0,
    r = arr.length - 1,
    indexAt = -1;

  while (r >= l) {
    m = Math.floor((l + r) / 2);
    console.log(l, r, m);

    if (arr[m] > ele) {
      r = m - 1;
    } else if (arr[m] < ele) {
      l = m + 1;
    } else if (arr[m] == ele) {
      indexAt = m;
      break;
    }
  }

  if (indexAt > -1) {
    return "Element found at " + (indexAt + 1) + " index";
  } else {
    return "Element not found";
  }
}

console.log(binarySearch([1, 4, 10, 11, 20, 33, 44, 50, 60], 1));
