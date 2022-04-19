/**
|--------------------------------------------------
| 输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
|--------------------------------------------------
*/
var runningSum = function (nums) {
  //初始数组
  let prefSum = new Array(nums.length).fill(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    // 前一个值 * 当前值
    prefSum[i] = prefSum[i - 1] + nums[i];
  }
  return prefSum;
};

console.log(runningSum([1, 2, 3, 4]));
