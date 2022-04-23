/**
|--------------------------------------------------
| 给出一个有序数组 A，数组中的每个数字都是 独一无二的，
找出从数组最左边开始的第 K 个缺失数字。
示例 1：
输入：A = [4,7,9,10], K = 1
输出：5
解释：
第一个缺失数字为 5 。

示例 2：
输入：A = [4,7,9,10], K = 3
输出：8
解释： 
缺失数字有 [5,6,8,...]，因此第三个缺失数字为 8 。

示例 3：
输入：A = [1,2,4], K = 3
输出：6
解释：
缺失数字有 [3,5,6,7,...]，因此第三个缺失数字为 6 。
 
提示：
1 <= A.length <= 50000
1 <= A[i] <= 1e7
1 <= K <= 1e8

|--------------------------------------------------
*/
const missingElement = (nums, k) => {
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = (end + start) >> 1;
    //缺失值
    const miss = nums[mid] - nums[0] - mid;
    if (miss < k) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return nums[end] - nums[0] - end < k
    ? nums[end] + k - (nums[end] - nums[0] - end) //缺失值
    : nums[start] + k - (nums[start] - nums[0] - start); //缺失值
};

console.log('missingElement', missingElement([4, 7, 9, 10], 1));
console.log('missingElement', missingElement([4, 7, 9, 10], 3));
console.log('missingElement', missingElement([1, 2, 4], 3));

// 时间复杂度 LogN
// 空间复杂度O1
