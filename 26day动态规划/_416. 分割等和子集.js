/**
|--------------------------------------------------
| 给你一个 只包含正整数 的 非空 数组 nums 。
请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。


输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
[1,10,11]

|--------------------------------------------------
*/
//! 原数组所有数字和一定是偶数，不然根本无法拆成两个和相同的子集合，只需要算出原数组的数字之和，然后除以2
var canPartition = function (nums) {
  //算出总和
  let sum = nums.reduce((pre, cur) => pre + cur)
  if (sum % 2 != 0) return false // 如果和是奇数时，则不能分成两个和相等的集合
  let n = nums.length
  sum = sum / 2

  // 初始化dp二维数组
  let dp = new Array(n + 1)
    .fill(false)
    .map(() => new Array(sum + 1).fill(false))
  for (let i = 0; i <= n; i++) {
    //初始化dp
    dp[i][0] = true
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j - nums[i - 1] < 0) {
        // 容量不足，装入不了第 i 个物品

        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  console.log('dp', dp)
  return dp[n][sum]
}
console.log('canPartition', canPartition([1, 5, 11, 5]))
console.log('canPartition', canPartition([1, 2, 3, 5]))
