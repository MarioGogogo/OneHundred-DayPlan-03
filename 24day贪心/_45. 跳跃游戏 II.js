/*
|--------------------------------------------------
| 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
！你的目标是使用最少的跳跃次数到达数组的最后一个位置。
假设你总是可以到达数组的最后一个位置。
输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
输入: nums = [2,3,0,1,4]
输出: 2
|--------------------------------------------------
*/

var jump = function (nums) {
  if (nums.length == 0) return 0;
  let curDistance = 0;
  let step = 0;
  let nextDistance = 0;

  for (let i = 0; i < nums.length; i++) {
    //下一步跳到最远距离
    nextDistance = Math.max(i + nums[i], nextDistance);
    if (i == curDistance) {
      //判断是否已经到达终点
      if (curDistance != nums.length - 1) {
        step++; // 再走一步 step
        curDistance = nextDistance;
        if (nextDistance >= nums.length - 1) break;
      } else {
        break;
      }
    }
  }
  return step;
};

console.log('jump', jump([2, 3, 0, 1, 4]));
