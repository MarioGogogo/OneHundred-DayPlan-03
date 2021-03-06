/**
|--------------------------------------------------
| 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
|--------------------------------------------------
*/
var canJump = function (nums) {
  if (nums == null || nums.length === 0) return false;
  let cover = 0; //初始一个
  for (let i = 0; i <= cover; i++) {
    // 比较每一个下标的步长
    cover = Math.max(i + nums[i], cover);
    //如果最后的步数 等于 或者超过nums的长度说明已经走出来了
    if (cover >= nums.length - 1) return true;
  }
  return false;
};

console.log('canJump', canJump([3, 2, 1, 0, 4]));
