// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  var stack = [];
  let leftBrackets = ["[", "{", "("];
  let rightBrackets = ["]", "}", ")"];

  for (let i = 0; i < S.length; i++) {
    if (leftBrackets.includes(S[i])) {
      stack.push(S[i]);
    } else if (rightBrackets.includes(S[i])) {
      let top = stack.length - 1;
      if (
        (S[i] == ")" && stack[top] == "(") ||
        (S[i] == "}" && stack[top] == "{") ||
        (S[i] == "]" && stack[top] == "[")
      ) {
        stack.pop();
      } else {
        return 0;
      }
    }
  }
  console.log(stack);
  return stack.length > 0 ? 0 : 1;
}

const S = "({{({}[]{})}}[]{})";
console.log(solution(S));
