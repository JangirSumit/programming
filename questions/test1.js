function swap(string, i, j) {
  let str = string.split("");

  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;

  return str.join("");
}

function permutations(param) {
  let possible = [];

  function inner(string, l, r) {
    if (l == r) {
      possible.push(string);
    } else {
      for (let i = l; i < string.length; i++) {
        let str = swap(string, l, i);
        console.log(`DEBUG - ${str}`);
        inner(str, l + 1, r);
      }
    }
  }

  inner(param, 0, param.length - 1);
  return possible;
}

console.log(permutations("abc"));
