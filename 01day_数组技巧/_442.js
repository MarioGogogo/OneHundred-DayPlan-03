/**
|--------------------------------------------------
| 给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。
请你找出所有出现 两次 的整数，并以数组形式返回。
输入：nums = [4,3,2,7,8,2,3,1]   注意 每一个数字 1 ≤ a[i] ≤ n 区间范围内
输出：[2,3]
输入：nums = [1,1,2]
输出：[1]
输入：nums = [1]
输出：[]
//?注意 每一个数字 1 ≤ a[i] ≤ n 区间范围内
|--------------------------------------------------
*/
//! 中等
var findDuplicates1 = function (nums) {
  if (nums.length < 2 || nums == null) return [];
  const map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      res.push(nums[i]);
    } else {
      map.set(nums[i], 1);
    }
  }
  return res;
};

//!性能更好
//借用索引号，我们用索引0表示数字1，索引1表示数字2...，当有个数字num，
// 我们将num - 1的位置的数字取相反数，连续两次取相反数会变回来，便可判断元素出现次数。
var findDuplicates = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] > 0) {
      nums[idx] = -nums[idx];
    } else {
      res.push(idx + 1);
    }
  }
  return res;
};

console.log('findDuplicates', findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
