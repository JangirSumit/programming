class Solution {
  static solution(s) {
    let countB = 0;
    let countA = 0;
    let countN = 0;

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char === "B") {
        countB++;
      } else if (char === "A") {
        countA++;
      } else if (char === "N") {
        countN++;
      }
    }

    // Calculate the maximum number of times "BANANA" can be formed
    const maxMoves = Math.min(
      countB,
      Math.floor(countA / 3),
      Math.floor(countN / 2)
    );

    return maxMoves;
  }
}

// Test cases
console.log(Solution.solution("NAABXXAN")); // Output: 1
console.log(Solution.solution("NAANAAXNABABYNNBZ")); // Output: 2
console.log(Solution.solution("QABAAAWOBL")); // Output: 0
