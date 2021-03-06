/**
|--------------------------------------------------
| 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
|--------------------------------------------------
/**
 *
 *
 * @param {*} word1
 * @param {*} word2
 * @return {*} 
 */
var minDistance = function (word1, word2) {
  //初始化数组
  const dp = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0))

  // i-1 表示word1 和 j-1 字符串 最近距离
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = j
  }
  /**1adf
   * 1. w[i-1] === w2[j-1] 表示字符相同不做任何处理
   * 2. w[i-1 ] != w2[j-1]  增删改 三操作
   * 3.w[i-1] === w2[j-1] 可以推导 dp[i][j] = dp[i-1][j-1]
   */
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      //递推方程
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }

  console.log('dp', dp)
  return dp[word1.length][word2.length]
}

console.log('minDistance', minDistance('horse', 'ros'))
