function solution(A, B) {
  var string = "";
  let a = new Array(A).fill("a");
  let b = new Array(B).fill("b");

  let hA = parseInt(A / 2);
  let hB = parseInt(B / 2);

  while (a.length && b.length) {
    if (A >= B * 2 || A - B >= 3) {
      string += a.slice(0, 2).join("") + b.slice(0, 1).join("");
      a.splice(0, 2);
      b.splice(0, 1);
    } else if (B >= A * 2 || B - A >= 3) {
      string += b.slice(0, 2).join("") + a.slice(0, 1).join("");
      b.splice(0, 2);
      a.splice(0, 1);
    } else if (A >= B) {
      string += a.slice(0, 1).join("") + b.slice(0, 1).join("");
      b.splice(0, 1);
      a.splice(0, 1);
    } else if (B >= A) {
      string += b.slice(0, 1).join("") + a.slice(0, 1).join("");
      b.splice(0, 1);
      a.splice(0, 1);
    }
  }

  if (a.length) {
    string += a.join("");
  }

  if (b.length) {
    string += b.join("");
  }
  return string;
}

console.log(solution(15, 25));

// let a = new Array(100).fill("a");
// console.log(a);
