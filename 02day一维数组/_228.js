/**
|--------------------------------------------------
| 给定一个  无重复元素 的 有序 整数数组 nums 。
输入：nums = [0,1,2,4,5,7]
输出：["0->2","4->5","7"]
解释：区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

输入：nums = [0,2,3,4,6,8,9]
输出：["0","2->4","6","8->9"]
解释：区间范围是：
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
|--------------------------------------------------
*/
var summaryRanges = function (nums) {
  if (nums == null || nums.length == 0) return [];
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]; //存一个起始
    while (i < nums.length && nums[i] + 1 == nums[i + 1]) {
      i++;
    }
    if (n == nums[i]) {
      res.push(n + '');
    } else {
      res.push(n + '->' + nums[i]);
    }
  }

  return res;
};

console.log('summaryRanges', summaryRanges([0, 1, 2, 4, 5, 7]));
