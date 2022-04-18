/*
 * @Author: your name
 * @Date: 2022-04-18 14:58:09
 * @LastEditTime: 2022-04-18 15:12:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /OneHundred-DayPlan-03/01day_数组技巧/_11.js
 */
/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/
var maxArea = function (height) {
  let left = 0; //设置左指针
  let right = height.length - 1; //设置右指针
  let ans = 0;

  while (left < right) {
    //最大区域
    const area = Math.min(height[left], height[right]) * (right - left);
    console.log('%c 🍭 area: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', area);
    ans = Math.max(ans, area);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
