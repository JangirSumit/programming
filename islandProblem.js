var numIslands = function (grid) {
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      //console.log(grid[i][j]);
      if (grid[i][j] == 1) {
        console.log(`${i} ${j}`);
        islands++;
        markGridValues(grid, i, j, grid.length, grid[i].length);
      }
    }
  }
  return islands;
};

const markGridValues = function (grid, i, j, r, c) {
  if (i < 0 || j < 0 || i > r - 1 || j > c - 1) {
    return;
  }

  if (grid[i][j] == 1) {
    grid[i][j] = 2;

    markGridValues(grid, i - 1, j, r, c);
    markGridValues(grid, i, j - 1, r, c);
    markGridValues(grid, i + 1, j, r, c);
    markGridValues(grid, i, j + 1, r, c);
  }
};
