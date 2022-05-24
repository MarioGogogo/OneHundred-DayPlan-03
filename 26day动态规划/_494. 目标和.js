/**
|--------------------------------------------------
| 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。
现在你有两个符号 + 和 -。对于数组中的任意一个整数，
你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5

解释：
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

数组非空，且长度不会超过 20 。
初始的数组的和不会超过 1000 。
保证返回的最终结果能被 32 位整数存下。
输入：nums = [1], target = 1
输出：1
|--------------------------------------------------
*/
var findTargetSumWays = function (nums, target) {
  // 求总数
  const sum = nums.reduce((a, b) => a + b)

  if (Math.abs(target) > sum) return 0

  if ((target + sum) % 2) return 0

  let bagSize = (target + sum) / 2

  let dp = new Array(bagSize + 1).fill(0)

  dp[0] = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      // dp[j] 表示：填满j（包括j）这么大容积的包，有dp[j]种方法
      // 那么凑整dp[5]有多少方法呢，也就是把 所有的 dp[j - nums[i]] 累加起来。
      dp[j] += dp[j - nums[i]]
    }
  }

  return dp[bagSize]
}

console.log('findTargetSumWays', findTargetSumWays([1, 1, 1, 1, 1], 3))
