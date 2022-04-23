/**
|--------------------------------------------------
| 升序数组在某一未知点发生旋转
 比如 0124567  4567012 
 你需要找到最小元素
 !可以假设不存在重复元素

 [4,5,6,7,0,1,2] ==> 0

 [2,1] ===> 1

 leet
|--------------------------------------------------
*/

const findMin = (nums) => {
  if (nums == null || nums.length === 0) return -1;

  //二分
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = Math.floor(start + (end - start) / 2);
    // 如mid > end 放弃左边 去找右边
    if (nums[mid] > nums[end]) {
      start = mid;
    } else {
      // 否则 我们放弃右边 最小值肯定再左边
      end = mid;
    }
  }
  return Math.min(nums[start], nums[end]);
};

console.log('findMin', findMin([2, 1]));
