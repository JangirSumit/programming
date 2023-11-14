//https://leetcode.com/problems/flatten-deeply-nested-array/

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n == 0 || arr.some((_) => _ instanceof Array) == false) {
    return arr;
  }

  //let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log("element", element);
    if (element instanceof Array) {
      arr.splice(i, 1, ...element);
      i = i + element.length - 1;
    }
  }
  return flat(arr, n - 1);
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
