/**
|--------------------------------------------------
| 给你一个字符串 s，请你将 s 分割成一些子串，
使每个子串都是回文。

返回符合要求的 最少分割次数 。
输入：s = "aab"
输出：1
解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串
输入：s = "a"
输出：0
输入：s = "ab"
输出：1
|--------------------------------------------------
*/

var minCut = function (s) {
  const n = s.length
  const g = new Array(n).fill(0).map((_) => new Array(n).fill(false))
  // 首先来定义 dp 数组，这里使用最直接的定义方法，一维的 dp 数组，其中 dp[i] 表示子串 [0, i] 范围内的最小分割数
  const dp = new Array(n).fill(0)

  for (let j = 0; j < n; j++) {
    for (let i = j; i >= 0; i--) {
      if (i === j) {
        g[i][j] = true
      } else {
        // 第一种情况：j - i = 1，s[i] === s[j]，两个字母挨着，相等就是回文
        // 第二种情况：j - i > 1，s[i] === s[j] && g[i+1][j-1]
        if (s[i] === s[j] && (j - i === 1 || g[i + 1][j - 1])) {
          g[i][j] = true
        }
      }
    }
  }

  for (let j = 1; j < n; j++) {
    if (g[0][j]) {
      // 从首字母到j处都是回文
      dp[j] = 0
    } else {
      dp[j] = j // 最大的分割数
      for (let i = 0; i <= j; i++) {
        if (g[i][j]) {
          dp[j] = Math.min(dp[j], dp[i - 1] + 1)
        }
      }
    }
  }
  // 那么最终要返回的就是 dp[n-1] 了
  return dp[n - 1]
}

console.log('minCut', minCut('aab'))
