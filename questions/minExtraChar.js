//https://leetcode.com/problems/extra-characters-in-a-string/

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  dictionary.sort((a, b) => b.length - a.length);
  for (const element of dictionary) {
    let index = s.indexOf(element);
    if (index > -1) {
      console.log("Before trim", element, s);
      s = s.replaceAll(element,""); //s.substring(0, index) + s.substring(index + element.length);
      console.log("After Trim", element, s);
    }
  }

  return s.length;
};

//let s = "leetscode",  dictionary = ["leet", "code", "leetcode"];
//let s = "sayhelloworld", dictionary = ["hello", "world"];
let s = "dwmodizxvvbosxxw",
  dictionary = [
    "ox",
    "lb",
    "diz",
    "gu",
    "v",
    "ksv",
    "o",
    "nuq",
    "r",
    "txhe",
    "e",
    "wmo",
    "cehy",
    "tskz",
    "ds",
    "kzbu",
  ];
console.log(minExtraChar(s, dictionary));
