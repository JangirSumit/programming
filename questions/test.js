function solution(riddle) {
  let removeChars = [];
  for (let index = 0; index < riddle.length; index++) {
    let removeChars = [];
    if (riddle[index] === "?") {
      if (index > 0) {
        removeChars.push(riddle[index - 1]);
      }

      if (index < riddle.length - 1) {
        removeChars.push(riddle[index + 1]);
      }

      let rand = randomString(1, removeChars);
      console.log(rand);
      riddle = riddle.replace("?", rand);
    }
  }

  return riddle;
}

function randomString(len, removeChars) {
  charSet = "abcdefghijklmnopqrstuvwxyz";

  charSet = charSet
    .split("")
    .filter((a) => (removeChars.indexOf(a) >= 0 ? false : true))
    .join("");
  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

console.log(solution("???????"));
