/**
|--------------------------------------------------
| 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
输入：nums = [], target = 0
输出：[-1,-1]
|--------------------------------------------------
*/

var searchRange = function (nums, target) {
  if (nums == null || nums.length == 0) return [-1, -1];
  // 分 2个二分
  const left = findLeft(nums, target);
  const right = findRight(nums, target);
  return [left, right];
};

const findLeft = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    const mid = Math.floor((end + start) / 2);
    if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
};

const findRight = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    const mid = Math.floor((end + start) / 2);
    if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (nums[end] === target) {
    return end;
  }
  if (nums[start] === target) {
    return start;
  }
  return -1;
};

console.log('searchRange', searchRange([5, 7, 7, 8, 8, 10], 8));
console.log('searchRange', searchRange([5, 7, 7, 8, 8, 10], 6));
console.log('searchRange', searchRange([], 0));
