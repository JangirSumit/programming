//https://leetcode.com/problems/basic-calculator/description/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const add = (a, b) => parseInt(a) + parseInt(b);
  const sub = (a, b) => parseInt(a) - parseInt(b);

  let result = 0;
  let stash1 = [];
  let a = null,
    b = null;
  let operator;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      continue;
    }

    if (s[i] === "(") {
      stash1.push(s[i]);
    } else if (s[i] === "+" || s[i] === "-") {
      operator = s[i];
    } else {
      if (a == null) a = s[i];
      else {
        b = s[i];
        
      }
    }
  }
};
