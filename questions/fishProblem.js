function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let total = A.length;
  let stack = [];

  for (let i = 0; i < A.length; i++) {
    if (B[i] == 1) {
      stack.push(A[i]);
    }

    if (B[i] == 0) {
      while (stack.length) {
        if (stack[stack.length - 1] > A[i]) {
          total -= 1;
          break;
        } else {
          total -= 1;
          stack.pop();
        }
      }
    }
  }

  return total;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
