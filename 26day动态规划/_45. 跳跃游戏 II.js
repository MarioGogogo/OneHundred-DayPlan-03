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
1 <= nums.length <= 104
|--------------------------------------------------
*/
// 🎊🎊🧧🧧动态规划版本
var jump = function (nums) {
  //初始化一个数组
  let setp = new Array(nums.length);

  setp[0] = 0;

  for (let i = 1; i < nums.length; i++) {
    //初始化每一个值无穷大
    setp[i] = Number.MAX_VALUE;
    //判断我走到当前这个点的时候  我前面是走几步过来的 取min
    for (let j = 0; j < i; j++) {
      if (setp[j] != Number.MAX_VALUE && j + nums[j] >= i) {
        setp[i] = setp[j] + 1; //取最小值
        break;
      }
    }
  }
  return setp[nums.length - 1];
};

console.log('jump', jump([2, 3, 0, 1, 4]));
console.log('jump', jump([1, 1, 2]));
