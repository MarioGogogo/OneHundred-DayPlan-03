/**
|--------------------------------------------------
| 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。
第一个差（如果存在的话）可能是正数或负数。

仅有一个元素或者含两个不等元素的序列也视作摆动序列。
输入：nums = [1,7,4,9,2,5]
输出：6
解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。
输入：nums = [1,17,5,10,13,15,10,5,16,8]
输出：7
解释：这个序列包含几个长度为 7 摆动序列。
其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。
输入：nums = [1,2,3,4,5,6,7,8,9]
输出：2
|--------------------------------------------------
*/
/*
!子序列 是由数组派生而来的序列，
! 删除（或不删除）数组中的元素而不改变其余元素的顺序。
! 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。} nums 
 * @returns 
 */
var wiggleMaxLength = function (nums) {
  if (nums == null || nums.length == 0) return 0;

  let up = 1,
    down = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1; //存放升序
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1; //存放降序
    }
  }
  return Math.max(up, down);
};
