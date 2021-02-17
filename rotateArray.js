function solution(A, K) {
  if (A.length == 0) {
    return A;
  }
  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }
  return A;
}

const A = [1, 2, 3, 4, 5];
const K = 3;

console.log(solution(A, K));
