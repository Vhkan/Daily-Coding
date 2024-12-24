// Number Of Islands
// Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// Test Case 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Test Case 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'
// Feel free to use your preferred language.

// Deapth First Search (DFS) Algorithm is used below

const numberOfIslands = function (grid) {
  // Handle edge case for empty grid
  if (!grid || grid.length === 0) return 0;
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

const dfs = function (grid, i, j) {
  // Check bounds and if the current cell is water
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return;
  }

  // Mark the current cell as visited by changing it to '0'
  grid[i][j] = "0";

  // Recursive calls for all adjacent cells
  dfs(grid, i - 1, j); // up
  dfs(grid, i + 1, j); // down
  dfs(grid, i, j - 1); // left
  dfs(grid, i, j + 1); // right
};

// Test cases
const test1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const test2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numberOfIslands(test1)); // Output: 1
console.log(numberOfIslands(test2)); // Output: 3
