var checkStraightLine = function (coordinates) {
  let [x1, y1] = coordinates[0];
  let [x2, y2] = coordinates[1];
  let flag = true;
  //console.log(`${[x1, y1]} ${[x2, y2]}`);

  let angle1 = (y2 - y1) / (x2 - x1);

  for (let i = 1; i < coordinates.length - 1; i++) {
    console.log(`${coordinates}`);

    [x2, y2] = coordinates[i];
    let [x3, y3] = coordinates[i + 1];
    let angle2 = (y3 - y2) / (x3 - x2);

    console.log(`${angle1} ${angle2}`);

    if (angle1 !== angle2) {
      flag = false;
      break;
    }
  }

  return flag;
};

let coordinates = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];

console.log(checkStraightLine(coordinates));
