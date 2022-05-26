/**
|--------------------------------------------------
| 给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点
 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

输入：triangle = [[-10]]
输出：-10 

|--------------------------------------------------
*/
var minimumTotal = function (triangle) {
  const n = triangle.length

  //初始化dp
  const dp = new Array(n + 1).fill(0).map(() => new Array(n).fill(Infinity))

  dp[0][0] = triangle[0][0]

  //  遍历
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + triangle[i + 1][j])
      dp[i + 1][j + 1] = Math.min(
        dp[i + 1][j + 1],
        dp[i][j] + triangle[i + 1][j + 1]
      )
    }
  }

  let ans = Infinity
  console.log('dp', dp)
  for (const x of dp[n - 1]) {
    ans = Math.min(ans, x)
  }

  return ans
}

console.log(
  'minimumTotal',
  minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])
)
