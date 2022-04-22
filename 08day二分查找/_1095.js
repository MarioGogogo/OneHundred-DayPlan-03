/**
|--------------------------------------------------
| 给你一个 山脉数组 mountainArr，请你返回能够使得 mountainArr.get(index)
  等于 target 最小 的下标 index 值。

如果不存在这样的下标 index，就请返回 -1。
输入：array = [1,2,3,4,5,3,1], target = 3
输出：2
解释：3 在数组中出现了两次，下标分别为 2 和 5，我们返回最小的下标 2。

输入：array = [0,1,2,4,2,1], target = 3
输出：-1
解释：3 在数组中没有出现，返回 -1。

输入：array = [0,1,2,4,3,2,1], target = 3
输出：4
解释：4 在数组中没有出现，返回 4。

|--------------------------------------------------
*/
/** 思路
 *  找到三顶元素之后 分成2个数组
 *  二个数组 left right 继续二分去查找target是否存在
 *  可能
 *  左边有 右边有 比较 index小取左边
 *  只有一边有
 *  二边都没有
 */
var findInMountainArray = function (target, nums) {
  //找到山峰索引值
  const peakIndex = searchPeakIndex(nums);
  console.log('peakIndex', peakIndex);
  //山峰左半部分
  const leftIndex = binarySearch(nums, 0, peakIndex - 1, target);
  console.log('%c 🍝 leftIndex: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', leftIndex);
  //如果左边有值target直接return
  if (leftIndex != -1) {
    return leftIndex;
  }
  //山峰右半部分
  const rightIndex = binaryRightSearch(nums, peakIndex, nums.length - 1, target);
  return rightIndex;
};

//二分模板
const binarySearch = (nums, left, right, target) => {
  let start = left;
  let end = right;

  while (start + 1 < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      return mid;
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

//倒序的所以稍微改动下
const binaryRightSearch = (nums, left, right, target) => {
  let start = left;
  let end = right;
  while (start + 1 < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      end = mid;
    } else if (nums[mid] > target) {
      start = mid;
    } else {
      return mid;
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

//找山顶值
const searchPeakIndex = (nums) => {
  //二分查找山顶值
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    const mid = start + ((end - start) >> 1); // 获取中间索引
    if (nums[mid] > nums[mid - 1]) {
      start = mid;
    } else if (nums[mid] < nums[mid - 1]) {
      end = mid;
    } else {
      return mid;
    }
  }
  return nums[start] > nums[end] ? start : end;
};

console.log('findInMountainArray', findInMountainArray(0, [3, 5, 3, 2, 0]));
