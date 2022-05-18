/**
 |--------------------------------------------------
 | 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

 问总共有多少条不同的路径？
 输入：m = 3, n = 7
 输出：28
 示例 2：

 输入：m = 2, n = 3
 输出：3
 |--------------------------------------------------
 */
let uniquePaths = function (m, n) {
  //初始化二维数组
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  console.log('dp', dp);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //初始化状态
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        // 状态转移方程;
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
console.log('uniquePaths', uniquePaths(3, 3));
