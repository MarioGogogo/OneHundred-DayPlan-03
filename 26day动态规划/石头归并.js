/**
|--------------------------------------------------
| 有一个石子归并的游戏。最开始的时候，有n堆石子排成一列，目标是要将所有的石子合并成一堆。合并规则如下：
每一次可以合并相邻位置的两堆石子
每次合并的代价为所合并的两堆石子的重量之和
求出最小的合并代价。
输入: [3, 4, 3]
输出: 17
样例 2:
输入: [4, 1, 1, 4]
输出: 18
解释: 
  1. 合并第二堆和第三堆 => [4, 2, 4], score = 2
  2. 合并前两堆 => [6, 4]，score = 8
  3. 合并剩余的两堆 => [10], score = 18

 石子归并的动规四要素
state：dp【j】表示下标i合并到j的最小耗费
function:dp[i]]min(dp[i][k]dp[k +1]])+sum(i,j) 
其中i《=k《j，sum（i，j）是i到j的子数组和
initialization:dp[i][i]=0 answer:dp[o][n -1]

|--------------------------------------------------
*/
var stoneGame = function (piles) {
  const n = piles.length
  if (piles == null || n === 0) return 0
  //初始化dp数组
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0))

  //初始化前缀 前1个数之后 0-0 前2个数之后0-1 前3个数之和0-2 所以最后0-n+1
  let sum_a = new Array(n + 1).fill(0)
  //前缀和
  for (let i = 0; i < n; i++) {
    sum_a[i + 1] = sum_a[i] + piles[i]
  }
  // 长度从2开始即可，因为长度为1的时候结果是0，dp初始化的时候默认就是0，没必要赋值
  for (let i = n - 1; i >= 0; i--) {
    // i枚举的是正在枚举的区间的左端点
    for (let j = i + 1; j < n; j++) {
      // 在求最小的时候，需要初始化成一个很大的数，然后不断更新
      dp[i][j] = Number.MAX_VALUE
      // i~~~j的和 用 0-j的和 减去 0-i的和
      cost = sum_a[j + 1] - sum_a[i]
      // 遍历i-j的区间最小值
      for (let k = i; k < j; k++) {
        //递推式
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + cost)
      }
    }
  }
  console.log('dp', dp)
  return dp[0][n - 1]
}

console.log('stoneGame', stoneGame([3, 4, 3]))
console.log('stoneGame', stoneGame([4, 1, 1, 4]))
console.log('stoneGame', stoneGame([4, 3, 3, 4]))
