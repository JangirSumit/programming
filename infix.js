function getInFix(expression) {
  const arr = [];
  for (let index = 0; index < expression.length; index++) {
    const element = expression[index];
    if (isOperand(element)) {
      arr.push(element);
    } else {
      let last1 = arr[arr.length - 1];
      arr.pop();
      let last2 = arr[arr.length - 1];
      arr.pop();

      arr.push(`(${last2}${element}${last1})`);
    }
  }

  return arr.join("");
}

function isOperand(element) {
  if (
    (element >= "a" && element <= "z") ||
    (element >= "A" && element <= "Z")
  ) {
    return true;
  }
  return false;
}

console.log(getInFix("ab*c+"));
