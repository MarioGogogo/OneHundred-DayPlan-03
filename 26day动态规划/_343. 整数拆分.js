/**
|--------------------------------------------------
| 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），
并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。
输入: n = 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
输入: n = 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

2 <= n <= 58
|--------------------------------------------------
*/
var integerBreak = function (n) {
  //初始化dp数组
  let dp = new Array(n + 1).fill(0)
  //初始化dp
  dp[2] = 1 //从2开始有意义

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      //状态方程 dp[i-j] === dp[3-1] = dp[2]
      dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j)
    }
  }
  return dp[n]
}

console.log('integerBreak', integerBreak(2))
console.log('integerBreak', integerBreak(10))
console.log('integerBreak', integerBreak(12))
