/**
|--------------------------------------------------
| 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
|--------------------------------------------------
*/
// 1.我们可以先将所有元素翻转，
// 2.这样尾部的 k个元素就被移至数组头部，
// 3. 然后我们再翻转 [n,0, k-1]
// 4.区间的元素和 [n,k,n−1] 区间的元素即能得到最后的答案。
const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start += 1;
    end -= 1;
  }
};

var rotate = function (nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

console.log('object', rotate([-1, -100, 3, 99], 2));
