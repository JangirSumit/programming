/*
Binary gap b/w 2 1's.
Eg: 101 - max gap is 1
1001 - max gap is 2
100101 - max gap is 2
1000 - max gap is 0
*/
function binaryGap(n) {
  let max = 0;
  let binary = n.toString(2);
  //   console.log(binary);
  let start = 0;
  let end = 0;
  while (end != -1) {
    end = binary.indexOf("1", start + 1);
    if (end > -1) {
      let part = binary.substring(start, end);
      if (max < part.length - 1) {
        max = part.length - 1;
      }
      start = end;
    }
  }
  return max;
}

console.log(binaryGap(15));
