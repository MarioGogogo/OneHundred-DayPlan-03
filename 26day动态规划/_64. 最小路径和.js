/**
 |--------------------------------------------------
 | 给定一个包含非负整数的 m* n grid，
 请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

 说明：每次只能向下或者向右移动一步。
 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 输出：7
 解释：因为路径 1→3→1→1→1 的总和最小。
 输入：grid = [[1,2,3],[4,5,6]]
 输出：12
 |--------------------------------------------------
 */
const minPathSum = function (grid) {
  // 边界情况
  if (grid == null || grid.length === 0) return 0;
  // 分成列
  let m = grid.length;
  let n = grid[0].length;
  let sum = new Array(m).fill(0).map(() => new Array(n).fill(0));
  console.log(sum);
  //空数组 初始化填充
  sum[0][0] = grid[0][0];
  // 第一列
  for (let i = 1; i < m; i++) {
    sum[i][0] = sum[i - 1][0] + grid[i][0];
  }
  console.log('sum', sum);
  // 第一行
  for (let i = 1; i < n; i++) {
    sum[0][i] = sum[0][i - 1] + grid[0][i];
  }
  console.log('sum', sum);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      sum[i][j] = Math.min(sum[i - 1][j], sum[i][j - 1]) + grid[i][j];
    }
  }
  return sum[m - 1][n - 1];
};

console.log(
  'minPathSum',
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
