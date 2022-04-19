/*
 * @Author: your name
 * @Date: 2022-04-18 16:14:02
 * @LastEditTime: 2022-04-19 09:01:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /OneHundred-DayPlan-03/01day_数组技巧/_238.js
 */
/**
|--------------------------------------------------
| 输入: nums = [1,2,3,4]
输出: [24,12,8,6]

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
|--------------------------------------------------
*/
//从头遍历求出 nums[i]nums[i] 左边的元素的积，从尾遍历求右边元素的积，分别存到 2 个数组中
var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = new Array(n).fill(0);
  //初始左边没有其他乘积 所以 初始为1
  output[0] = 1;
  //只扫左边乘积 【num0  num0*num1 num0*num1*num2
  for (let i = 1; i < n; i++) {
    // 当前乘积
    output[i] = output[i - 1] * nums[i - 1];
  }
  //扫右边乘积
  // 初始1
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    //output[i] 这里指的刚才左边的乘积  * right 右边乘积
    output[i] = output[i] * right;
    //现在更新right值 用于下一次计算获取右边最新乘积
    right *= nums[i];
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
