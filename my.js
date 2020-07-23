function mergeTwoSortedArray(a1, a2) {
  let i = 0,
    j = 0;
  let newArr = [];
  while (i < a1.length && j < a2.length) {
    if (a1[i] <= a2[j]) {
      newArr.push(a1[i]);
      i++;
    } else {
      newArr.push(a2[j]);
      j++;
    }
  }

  if (i == a1.length && j < a2.length) {
    newArr = [...newArr, ...a2.slice(j)];
  } else if (j == a2.length && i < a1.length) {
    newArr = [...newArr, ...a1.slice(i)];
  }

  return newArr;
}

let a1 = [1, 4, 7, 10];
let a2 = [2, 4, 6, 11];

console.log(mergeTwoSortedArray(a1, a2).join(" "));
