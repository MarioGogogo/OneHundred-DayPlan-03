/**
|--------------------------------------------------
 在数组中满足[1,2,-1,3,-2,4]
| 满足 a + b + c === 0
|--------------------------------------------------
*/

const threeSum = (nums) => {
  if (nums == null || nums.length < 3) return -1;
  //排序
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    //  过滤重复 i!= 0 表示不能越界 如果i-1 == -1 就报错了
    if (i != 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // [1,2,3,4]
    //否则找到
    findTwoSum(nums, i, result);
  }

  return result;
};

const findTwoSum = (nums, index, result) => {
  let left = index + 1;
  let right = nums.length - 1;
  let target = -nums[index]; // a + b = 0 - c (-c)
  while (left < right) {
    let twoSum = nums[left] + nums[right];
    if (twoSum < target) {
      left++;
    } else if (twoSum < target) {
      right--;
    } else {
      //这里是twosum 相等target找到了
      result.push([nums[index], nums[left], nums[right]]);
      left++;
      right--;
      //如果这里发现 左指针移动到 2 还是跟前面一个值相同 那么继续要跳过重复
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      //如果这里发现 右指针移动到 2 还是跟前面一个值相同 那么继续要跳过重复
      while (left < right && nums[right] === nums[right - 1]) {
        right--;
      }
    }
  }
};

console.log('threeSum', threeSum([-7, 2, 2, 3, 4, 5, 5]));
