/**
|--------------------------------------------------
| 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 输入：nums = [1,2,0]
输出：3
输入：nums = [3,4,-1,1]
输出：2
输入：nums = [7,8,9,11,12]
输出：1
|--------------------------------------------------
**/
var firstMissingPositive = function (nums) {
  //边界判断
  if (nums == null || nums.length === 0) return 1
  for (let i = 0; i < nums.length; i++) {
    /*
     * [2 4 1 5 3]
     * [4 2 1 5 3]
     * [1 2 4 5 3]
     * [1 2 4 3 5]
     * [1 2 3 4 5]
     * 循环把 对应 n的值 放入对应 i+1 的位置
     */
    while (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] != nums[i]
    ) {
      // 交换
      swap(nums, nums[i] - 1, i)
    }
  }
  //再一个for循环找到缺失值
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1
    }
  }
  return nums.length + 1
}

//交换位置
function swap(nums, x, y) {
  return ([nums[x], nums[y]] = [nums[y], nums[x]])
}

console.log('firstMissingPositive', firstMissingPositive([1, 2, 0]))
console.log('firstMissingPositive', firstMissingPositive([3, 4, -1, 1]))
console.log('firstMissingPositive', firstMissingPositive([7, 8, 9, 11, 12]))
