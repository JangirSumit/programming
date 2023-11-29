//https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  const calculateDistance = (point, query) => {
    const d = Math.sqrt(
      Math.pow(point[0] - query[0], 2) + Math.pow(point[1] - query[1], 2)
    );
    //console.log(query, point, d);
    return d;
  };

  const result = [];

  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < points.length; j++) {
      if (calculateDistance(points[j], queries[i]) <= queries[i][2]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

const points = [
    [1, 3],
    [3, 3],
    [5, 3],
    [2, 2],
  ],
  queries = [
    [2, 3, 1],
    [4, 3, 1],
    [1, 1, 2],
  ];

console.log(countPoints(points, queries));
