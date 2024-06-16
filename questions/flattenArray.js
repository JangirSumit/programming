var numbers = [1, [2, 3, [4, [5]]]];

function flattenArray(arr) {
  var newArr = [];

  function flat(arr) {
    for (const a of arr) {
      if (Array.isArray(a)) {
        flat(a);
      } else {
        newArr.push(a);
      }
    }
  }

  flat(arr);
  return newArr;
}

const newArr = flattenArray(numbers);
console.log(newArr);
