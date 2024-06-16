// Check whether a given number is palindrome or not

function isPalindrome(num) {
  if (num >= 4294967296 || num <= -4294967295) {
    return 0
  }

  let newNum = 0;
  let passedNum = num;
  while (num > 0) {
    let reminder = num % 10; //121 -> 1, 2, 1
    num = parseInt(num / 10); //121 -> 12, 1, 0
    newNum = newNum * 10 + reminder; //121 -> 1, 10+2=12, 120+1
  }

  return newNum === passedNum;
}

console.log(isPalindrome(121));
console.log(isPalindrome(122));
console.log(isPalindrome(1222332221));