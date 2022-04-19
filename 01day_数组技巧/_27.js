/**
|--------------------------------------------------
| 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
|--------------------------------------------------
*/
var removeElement = function (nums, val) {
  //边界条件
  if (nums == null || nums.length == 0) return 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[start] = nums[i];
      start++;
    }
  }
  console.log('%c 🥡 nums: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', nums);
  return start;
};

console.log('removeElement', removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
