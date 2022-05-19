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
  let n = s.length;
  if (n <= 1) {
    return 0;
  }
  // dp[i][j] 表示s[i~j]是否为回文串
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  for (let i = 0; i < n; ++i) {
    dp[i][i] = true;
  }
  console.log('dp', dp);
  for (let i = n - 2; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      if (s[i] === s[j]) {
        dp[i][j] = j - i + 1 <= 2 ? true : dp[i + 1][j - 1];
      }
    }
  }
  // dp1[i]表示字符串s[0~i]的最少分割次数
  let dp1 = new Array(n).fill(0).map((item, idx) => idx);
  for (let i = 1; i < n; ++i) {
    // 如果s[0]到s[i]为回文，那就不需要分割，dp1[i] = 0 次数最少
    if (dp[0][i]) {
      dp1[i] = 0;
      continue;
    }
    for (let j = 1; j <= i; ++j) {
      if (dp[j][i]) {
        dp1[i] = Math.min(dp1[i], dp1[j - 1] + 1);
      }
    }
  }
  return dp1[n - 1];
};

// const minCut = function (s) {
//   let n = s.length;

//   const dp = new Array(s);

//   return dp[n - 1];
// };

console.log('minCut', minCut('aab'));
