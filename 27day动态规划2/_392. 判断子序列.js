/**
|--------------------------------------------------
| 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符
而不改变剩余字符相对位置形成的新字符串。
（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
输入：s = "abc", t = "ahbgdc"
输出：true
输入：s = "axc", t = "ahbgdc"
输出：false
|--------------------------------------------------
*/
// 动态规划
var isSubsequence = function (s, t) {
  //  初始化dp
  let dp = new Array(s.length + 1)
    .fill(0)
    .map(() => new Array(t.length + 1).fill(0))

  //遍历
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }
  console.log('dp', dp)
  if (dp[s.length][t.length] === s.length) return true
  return false
}

console.log('isSubsequence', isSubsequence('abc', 'ahbgdc'))
