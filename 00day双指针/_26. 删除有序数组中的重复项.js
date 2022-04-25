/**
|--------------------------------------------------
| 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，
  返回删除后数组的新长度。
  
  元素的 相对顺序 应该保持 一致 。

  输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。
不需要考虑数组中超出新长度后面的元素。
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。
不需要考虑数组中超出新长度后面的元素。
|--------------------------------------------------
*/
var removeDuplicates = function (nums) {
  if (nums == null || nums.length == 0) return 0;
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] != nums[right]) {
      // 为什么要先left++ 再调换位置
      left++;
      nums[left] = nums[right];
      console.log('nums1', nums);
    }
    right++;
  }
  return left + 1;
};

console.log('removeDuplicates', removeDuplicates([1, 1, 2]));
console.log('removeDuplicates', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
