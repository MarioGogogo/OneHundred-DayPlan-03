/**
|--------------------------------------------------
| 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：

    若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
    若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
输入：nums = [3,4,5,1,2]
输出：1
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
输入：nums = [4,5,6,7,0,1,2]
输出：0
解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。
输入：nums = [11,13,15,17]
输出：11
解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。

|--------------------------------------------------
*/
var findMin = function (nums) {
  if (nums == null || nums.length === 0) return -1;

  //二分
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    const mid = start + ((end - start) >> 1);
    if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return Math.min(nums[start], nums[end]);
};

console.log('findMin', findMin([4, 5, 6, 7, 0, 1, 2]));
