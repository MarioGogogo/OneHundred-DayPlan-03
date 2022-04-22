/**
|--------------------------------------------------
| 给顶一个数组
相邻数字是不同的
满足
A[0] < A[1] && A[n-2] > A[n-1] 大白话就是 二边向上攀升
条件：
数组保证至少一个峰值
数组存在多个峰值 取任意一个即可
数组至少包含三个数

[1,2,1,3,4,5,7,6]  ===》 1 或者 6 下标
[1,2,3,4,1] ===》 3
|--------------------------------------------------
*/

const lookingForPeak = (nums) => {
  if (nums == null || nums.length === 0) return -1;

  //二分
  let start = 0;
  let end = nums.length - 1;
  // 首先可以肯定 峰值不可能再2端
  while (start + 1 < end) {
    const mid = Math.floor(start + (end - start) / 2);
    // 如果mid左上攀升 那么放弃右边
    if (nums[mid] < nums[mid - 1]) {
      end = mid;
    } else if (nums[mid] > nums[mid - 1]) {
      // 如果mid 攀升 那么放弃左边
      start = mid;
    } else {
      return mid;
    }
  }

  return nums[start] > nums[end] ? start : end;
};

console.log('lookingForPeak', lookingForPeak([1, 2, 1, 3, 4, 5, 7, 6]));
