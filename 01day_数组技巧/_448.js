/**
|--------------------------------------------------
| 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]

输入：nums = [1,1]
输出：[2]
|--------------------------------------------------
*/
//!因为数字 比如n=8 数字 排序后应该是 [1....8] 当前索引 就是 值n[i] -1

var findDisappearedNumbers = function (nums) {
  let len = nums.length;
  let index = 0;
  while (index < len) {
    //比如 [1,2,3] 下标的值 ==  下标+1 表示排序正确跳过即可
    if (nums[index] == index + 1) {
      index++;
    } else {
      /**
         *不正确序列 2种情况
         1.调换顺序的2个值相同 比如 [1,2,2,4]
         2.不相同则调换位置
         */
      let targetIndex = nums[index] - 1; //下标
      if (nums[targetIndex] === nums[index]) {
        index++;
        continue;
      }
      //交换位置
      let temp = nums[targetIndex];
      nums[targetIndex] = nums[index];
      nums[index] = temp;
    }
  }
  console.log('nums', nums);
  //寻找缺失的值
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      res.push(i + 1);
    }
  }
  return res;
};

console.log('findDisappearedNumbers', findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
