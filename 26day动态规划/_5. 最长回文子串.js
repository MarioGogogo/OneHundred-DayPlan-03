/**
|--------------------------------------------------
给你一个字符串 s，找到 s 中最长的回文子串。


| 输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
输入：s = "cbbd"
输出："bb"
|--------------------------------------------------
*/
// 动态规划版本
var longestPalindrome = function (s) {
  if (s == null || s.length === 0) return ''
  let res = ''
  //初始化dp数组
  const dp = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(false))

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = true
    for (let j = i; j < s.length; j++) {
      //dp[i][j]表示子串i～j是否是回文子串
      //回文子串必须满足s[i]，s[j]相等。并且向外扩展一个字符也相等，即dp[i+1][j-1]也是回文子串
      //j - i < 2表示子串小于等于1也是回文串 相邻
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
      //更新最长的长度
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }
  return res
}

console.log('longestPalindrome', longestPalindrome('babad'))
