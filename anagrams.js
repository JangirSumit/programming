function swap(string, i, j) {
  let temp;
  let arr = string.split("");
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
}

function permutations(string) {
  let per = [];

  function permute(string, l, r) {
    if (l === r) {
      //console.log(string);
      per.push(string);
    } else {
      for (let i = l; i <= r; i++) {
        let str = swap(string, l, i);
        permute(str, l + 1, r);
      }
    }
  }
  permute(string, 0, string.length - 1);
  return per;
}

let result = permutations("Sum");
console.log(result);
