/**
|--------------------------------------------------
| 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。
请你判断是否可以利用字典中出现的单词拼接出 s 。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
|--------------------------------------------------
*/
var wordBreak = function (s, wordDict) {
  //字典存入 set
  let wordSet = new Set(wordDict);
  let len = s.length;
  //初始化数组
  const dp = new Array(len + 1).fill(false);
  //初始化
  dp[0] = true;

  for (let i = 1; i <= len; i++) {
    //从后往前遍历
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i] == true) break;
      if (dp[j] == false) continue;
      //截取当前字符串
      const suffix = s.slice(j, i);
      //状态转移方程
      if (dp[j] == true && wordSet.has(suffix)) {
        dp[i] = true;
        break;
      }
    }
  }
  // 答案
  return dp[len];
};
