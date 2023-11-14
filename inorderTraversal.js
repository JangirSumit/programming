//https://leetcode.com/problems/nested-array-generator/description/

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  if (arr.length == 0) {
    return arr;
  }

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element instanceof Array) {
      yield* inorderTraversal(element);
    } else {
      yield element;
    }
  }
};

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
