/**
|--------------------------------------------------
| 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组
（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
输入：nums = [1]
输出：1
输入：nums = [5,4,-1,7,8]
输出：23
|--------------------------------------------------
*/

var maxSubArray = function (nums) {
  let results = -Infinity;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    // 2个if判断顺序不能换 例如[-1] 必须先比较大小赋值 再去比较是否归零
    if (count > results) {
      results = count;
    }
    if (count < 0) {
      count = 0; //累加负数 则归零
    }
  }
  return results;
};

console.log('maxSubArray', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log('maxSubArray', maxSubArray([5, 4, -1, 7, 8]));
