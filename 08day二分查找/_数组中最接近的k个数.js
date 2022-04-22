/**
|--------------------------------------------------
| 在目标target  最接近的k个整数  返回k个数 并按照与target接近程度
 从小到大排序  小的数再前
输入 1 2 4 6 8   target =3 k=4

返回  [2,4,1,6]

array + target + sort ====>>>> binary search 二分法
|--------------------------------------------------
*/

//思路 1 找中界线  2 从中界线找到2边最接近k个数字

const kCloseNumbers = (nums, target, k) => {
  //第一步调用二分查找分界线
  let right = findUpperCloset(nums, target);
  console.log('right', right);
  let left = right - 1;
  console.log('left', left);
  let res = [];
  //找到left左右指针现在就要 归并去寻找那个离target近
  for (let i = 0; i < k; i++) {
    //归并排序
    if (isLeftCloser(nums, target, left, right)) {
      res.push(nums[left]);
      left--;
    } else {
      res.push(nums[right]);
      right++;
    }
  }
  return res;
};
//? 归并排序
const isLeftCloser = (nums, target, left, right) => {
  //说明左指针已经取完
  if (left < 0) {
    return false;
  }
  //说明右指针已经取完
  if (right >= nums.length) {
    return true;
  }
  // 为什么有等号？ 如果左右相等 则 去左边 比较小
  return target - nums[left] <= nums[right] - target;
};

//!找到大于等于target的最左下标
const findUpperCloset = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] > target) {
      end = mid;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      return mid;
    }
  }

  //因为要找最左 所以先判断start
  if (nums[start] >= target) {
    return start;
  }
  // 如果start不行 再判断 end
  if (nums[end] >= target) {
    return end;
  }
  //如果找不到 则取最接近k的右第一个边数字  1 2 ❤️ -> 【4】
  return end;
};

console.log('kCloseNumbers', kCloseNumbers([1, 2, 4, 6, 8], 3, 4));

// 时间复杂度logn + o(k);
