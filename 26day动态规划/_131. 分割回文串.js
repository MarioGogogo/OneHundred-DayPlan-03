/**
|--------------------------------------------------
| 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。
返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]

输入：s = "a"
输出：[["a"]]


|--------------------------------------------------
*/
// 动态规划版本
var partition = function (s) {
  //第二步 回溯把每一个回文串 放入一个数组中
  const backtracking = (i) => {
    if (i === n) {
      ret.push(ans.slice())
      return
    }
    for (let j = i; j < n; ++j) {
      if (f[i][j]) {
        //判断是回文则加入
        ans.push(s.slice(i, j + 1))
        backtracking(j + 1)
        ans.pop()
      }
    }
  }

  //第一步 先求 动态规划 dp[i][j]
  const n = s.length
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true))
  let ret = [],
    ans = []

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i; j < n; j++) {
      f[i][j] = s[i] === s[j] && (j - i < 2 || f[i + 1][j - 1])
    }
  }
  backtracking(0)
  return ret
}

console.log('partition', partition('abbab'))
