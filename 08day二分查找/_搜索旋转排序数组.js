/**
|--------------------------------------------------
| 给一个数组 比如 0 12 4567 可能变成 4567 0 12 给定一个target
  如果再数组中找到目标值 返回  
  否则返回 -1

  比如
  [4,5,1,2,3] target 1 返回2
  [4,5,1,2,3] target 0 返回 -1

|--------------------------------------------------
*/
/**
 * 1.用一次二分最小值要求出来
 * 2 比如target 与最小值 知道左边 还是右边
 * 3.再用一次二分 找到目标值
 */
const twoSearch = (nums, target) => {
  if (nums == null || nums.length == 0) return -1;

  //套路二分
  let start = 0;
  let end = nums.length - 1;
  if (start + 1 < end) {
    const mid = Math.floor(start + (end - start) / 2);

    //把分解 成 头部 中部 尾部
    if (nums[mid] > nums[end]) {
      //再中段 要再次比较  target再中段
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid;
      } else {
        // target 再头段 或者 尾部
        start = mid;
      }
    } else {
      // target再中端
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid;
      } else {
        // target 再头段 或者 尾部
        end = mid;
      }
    }
  }

  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
};

console.log('twoSearch', twoSearch([4, 5, 1, 2, 3], 1));
