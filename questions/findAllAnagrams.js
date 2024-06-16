var findAnagrams = function (s, p) {
  const np = p.split("").sort().join("");
  const ana = [];
  for (let i = 0; i < s.length; i++) {
    const ns = s.substr(i, p.length).split("").sort().join("");
    //console.log(`${ns} ${np}`);
    if (ns === np) {
      ana.push(i);
    }
  }

  return ana;
};

const s = "abab";
const p = "ab";

console.log(findAnagrams(s, p));
