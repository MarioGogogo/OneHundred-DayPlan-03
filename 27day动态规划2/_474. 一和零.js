/**
|--------------------------------------------------
| 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。

如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出：4
解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
输入：strs = ["10", "0", "1"], m = 1, n = 1
输出：2
解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
|--------------------------------------------------
*/

//吧 strs看做物品  m n二个容量的背包
var findMaxForm = function (strs, m, n) {
  //初始化dp
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

  //三层循环
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    let oneNum = 0,
      zeroNum = 0
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '0') zeroNum++
      else oneNum++
    }

    for (let x = m; x >= zeroNum; x--) {
      for (let y = n; y >= oneNum; y--) {
        // 推导公式
        dp[x][y] = Math.max(dp[x][y], dp[x - zeroNum][y - oneNum] + 1)
      }
    }
  }
  return dp[m][n]
}

console.log('findMaxForm', findMaxForm(['10', '0', '1'], 1, 1))
