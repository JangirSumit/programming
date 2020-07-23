var floodFill = function (image, sr, sc, newColor) {
  fillGrid(
    image,
    sr,
    sc,
    image.length,
    image[0].length,
    newColor,
    image[sr][sc]
  );
  return image;
};

var fillGrid = function (image, i, j, r, c, newColor, sourceColor) {
  if (i < 0 || j < 0 || i > r - 1 || j > c - 1) {
    return;
  }

  if (image[i][j] === sourceColor && image[i][j] != newColor) {
    image[i][j] = newColor;
    console.log(`${i} ${j} ${r} ${c} ${sourceColor}`);
    fillGrid(image, i - 1, j, r, c, newColor, sourceColor);
    fillGrid(image, i, j - 1, r, c, newColor, sourceColor);
    fillGrid(image, i + 1, j, r, c, newColor, sourceColor);
    fillGrid(image, i, j + 1, r, c, newColor, sourceColor);
  }
};

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

let sr = 1;
let sc = 1;
let newColor = 2;

console.log(floodFill(image, sr, sc, newColor));
