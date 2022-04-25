/**
|--------------------------------------------------
| 在排好序的数组中找到2个数 相减 等于target
[2,7,15,24] target = 5

[1,1] target = 0

|--------------------------------------------------
*/
//同向双指针
const twoNumIsPres = (nums, target) => {
  if (nums == null || nums.length < 2) return [-1, -1];
  if (nums.length == 2 && nums[1] - nums[0] == target) {
    return [nums[1], nums[0]];
  }

  let j = 1;
  target = Math.abs(target); //绝对值
  for (let i = 0; j < nums.length; i++) {
    // j指针必须在i的右侧 🔥🔥🔥 这步很关键
    j = Math.max(j, i + 1);
    while (j < nums.length && nums[j] - nums[i] < target) {
      j++;
    }
    // 指针走完溢出了就需要break这次循环
    if (j > nums.length) break;
    // 如果找到答案直接return
    if (nums[j] - nums[i] == target) {
      return [nums[i], nums[j]];
    }
  }
  return [-1, -1];
};

console.log('twoNumIsPresupposed', twoNumIsPres([2, 7, 15, 24], 5));
console.log('twoNumIsPresupposed', twoNumIsPres([1, 1, 2, 3, 3], 1));
console.log('twoNumIsPresupposed', twoNumIsPres([0, 1, 2, 2], 0));
console.log('twoNumIsPresupposed', twoNumIsPres([1, 1], 0));
