/**
|--------------------------------------------------
| 经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：

    若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]
    若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]
给你一个可能存在 重复 元素值的数组 nums ，
它原来是一个升序排列的数组，
输入：nums = [1,3,5]
输出：1
输入：nums = [2,2,2,0,1]
输出：0
[4,5,6,7,0,1,4]
0
|--------------------------------------------------
*/
var findMinⅡ = function (nums) {
  if (nums == null || nums.length === 0) return -1;
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    const mid = (start + end) >> 1;
    if (nums[mid] > nums[end]) {
      start = mid;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      // 由于重复元素的存在，我们并不能确定
      // 究竟在最小值的左侧还是右侧，因此我们不能莽撞地忽略某一部分的元素
      end -= 1;
    }
  }
  return Math.min(nums[start], nums[end]);
};

console.log('findMinⅡ', findMinⅡ([1, 3, 5]));
console.log('findMinⅡ', findMinⅡ([2, 2, 2, 0, 1]));
console.log('findMinⅡ', findMinⅡ([4, 5, 6, 7, 0, 1, 4]));
console.log('findMinⅡ', findMinⅡ([1, 3, 3]));
console.log('findMinⅡ', findMinⅡ([3, 3, 3, 3, 3, 3, 3, 3, 1, 3]));
