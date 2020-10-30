function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var Req = A.filter((a) => a > 0);

  if (Req.length === 0) return 1;
  else {
    var unique = Req.filter((item, index) => Req.indexOf(item) === index);

    total = (A.length * A.length - 1) / 2;

    uniqueTotal = unique.reduce((a, b) => a + b);
  }
}
