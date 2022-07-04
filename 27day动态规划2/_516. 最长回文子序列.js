/**
|--------------------------------------------------
| 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

子序列定义为：不改变剩余字符顺序的情况下，
删除某些字符或者不删除任何字符形成的一个序列。

输入：s = "bbbab"
输出：4
解释：一个可能的最长回文子序列为 "bbbb" 。
输入：s = "cbbd"
输出：2
解释：一个可能的最长回文子序列为 "bb" 。

|--------------------------------------------------
*/
var longestPalindromeSubseq = function (s) {
  //初始化dp
  let n = s.length
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }
  //遍历顺序
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      //递推公式
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2 //
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  console.table(dp)
  return dp[0][n - 1]
}
// 复杂度 On2 空间 On2
console.log('longestPalindromeSubseq', longestPalindromeSubseq('cbbd'))
