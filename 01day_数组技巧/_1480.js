/*
 * @Author: your name
 * @Date: 2022-04-18 15:59:30
 * @LastEditTime: 2022-04-18 16:03:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /OneHundred-DayPlan-03/01day_数组技巧/_1480.js
 */
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
    prefSum[i] = prefSum[i - 1] + nums[i];
  }
  return prefSum;
};

console.log(runningSum([1, 2, 3, 4]));
