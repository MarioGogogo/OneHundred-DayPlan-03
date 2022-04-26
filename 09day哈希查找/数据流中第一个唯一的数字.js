/**
|--------------------------------------------------
| 给一个连续的数据流 写一个函数返回种植数字到达的第一个
  唯一数字  包括 终止数字  如果找不到返回-1

  [1,2,2,1,3,3,4,5,6]  k = 5  返回4
  [1,2,2,1,3,4,4,6,6] k = 5 返回3
|--------------------------------------------------
*/
// 思路;
// 第一次循环map中计数
// 第二次循环找到count=1的值就是第一次出现的数字

const firstUniqueNumber = (nums, target) => {
  //特殊处理
  if (nums == null || nums.length == 0) return;

  const map = new Map();
  //循环
  for (let i = 0; i < nums.length; i++) {
    //如果循环到 对应数字则退出
    if (nums[i] == target) {
      break;
    }
    //是否存过数字
    if (map.has(nums[i])) {
      const count = map.get(nums[i]);
      map.set(nums[i], count + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  //第二次循环查找count=1
  for (const [key, val] of map.entries()) {
    if (val === 1) {
      return key;
    }
  }
  //找不到返回-1
  return -1;
};

console.log('firstUniqueNumber', firstUniqueNumber([1, 2, 2, 1, 3, 3, 4, 5, 6], 5));

console.log('firstUniqueNumber', firstUniqueNumber([1, 2, 2, 1, 3, 4, 4, 6, 6], 5));
