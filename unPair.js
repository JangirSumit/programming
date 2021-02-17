// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let map = {};

  for (let i = 0; i < A.length; i++) {
    if (A[i] in map) {
      map[A[i]] += 1;
    } else {
      map[A[i]] = 1;
    }
  }

  for (const key in map) {
    if (map[key] % 2 == 1) {
      return key;
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
