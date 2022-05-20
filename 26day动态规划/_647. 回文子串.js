/**
|--------------------------------------------------
| 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
|--------------------------------------------------
*/
var countSubstrings = function (s) {
  if (s == null || s.length === 0) return 0
  const n = s.length
  //  初始化dp数组
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false))

  console.log('dp', dp)

  let result = 0
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      //判断是否回文
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        result++
        dp[i][j] = true
      }
    }
  }
  console.log('dp', dp)
  return result
}

console.log('countSubstrings', countSubstrings('abc'))
console.log('countSubstrings', countSubstrings('aaa'))
