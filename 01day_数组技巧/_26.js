/*
 * @Author: your name
 * @Date: 2022-04-18 17:05:16
 * @LastEditTime: 2022-04-18 17:20:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /OneHundred-DayPlan-03/01day_数组技巧/_26.js
 */
/**!
|--------------------------------------------------
| 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，
使每个元素 只出现一次 ，返回删除后数组的新长度。
元素的 相对顺序 应该保持 一致 。
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
|--------------------------------------------------
*/
//!请你 原地 删除重复出现的元素，
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;

  let slow = 0,
    fast = 1;
  while (fast < nums.length) {
    if (nums[fast] != nums[slow]) {
      slow++; //计数 累加
      nums[slow] = nums[fast];
    }
    fast++;
  }
  console.log('nums', nums);
  return slow + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
