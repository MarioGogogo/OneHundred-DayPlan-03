/**
|--------------------------------------------------
| 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
|--------------------------------------------------
*/
// 在循环体内排除没有目标值的区间 left < right 左闭右闭 [left,right】
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    //防止溢出
    const mid = Math.floor((left + right + 1) / 2);
    console.log('mid', mid);
    if (nums[mid] === target) {
      return mid;
    }
    //中间值比目标值大 说明要去左边找
    if (nums[mid] > target) {
      right = mid - 1;
      //中间值比目标值小 说明要去右边找
    } else if (nums[mid] < target) {
      left = mid;
    }
  }

  return -1;
};

console.log('search', search([-1, 0, 3, 5, 9, 12], 2));

/**
 *
 * 跟第一种区别再与  left <= right 左闭右开 [left,right)
 */
var search2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // 下标 【1 3 7 11 12 19】 找 15
  //第一次 7 下标 【3-5】
  //第二次 下标 【5 5】
  while (left <= right) {
    //防止溢出
    const mid = Math.floor(left + (right - left) / 2);
    console.log('mid', mid);
    if (nums[mid] === target) {
      return mid;
    }
    //中间值比目标值大 说明要去左边找
    if (nums[mid] > target) {
      right = mid - 1;
      //中间值比目标值小 说明要去右边找
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  return -1;
};

console.log('search', search2([-1, 0, 3, 5, 9, 12], 2));

//!第三种模板(推荐)
const binarySearch = (nums, target) => {
  if (nums == null || nums.length === 0) return -1;
  let start = 0;
  let end = nums.length - 1;
  // 用start + 1 < end; 不是用  start <end 避免死循环
  // 再 fist target的情况下不会出现死循环
  // 例如【1，1】 target =1
  // 采用 start+1 < end 保证不会出现死循环
  while (start + 1 < end) {
    //防止数据过大溢出
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] < target) {
      //mid+1 也正确 但还是简单点
      start = mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      return mid;
    }
  }
  //因为上面 start+1 < end
  //这里要结束的时候判断 star  end情况 first position of targget 先看start 否则先看end
  if (nums[start] == target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
};
console.log('binarySearch', binarySearch([-1, 0, 3, 5, 9, 12], 3));
