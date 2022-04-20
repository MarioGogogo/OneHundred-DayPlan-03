/**
|--------------------------------------------------
| 1. 题目
给定一个排序的整数数组 nums ，其中元素的范围在 闭区间 [lower, upper] 当中，返回不包含在数组中的缺失区间。

示例：

输入: nums = [0, 1, 3, 50, 75], lower = 0 和 upper = 99,
输出: ["2", "4->49", "51->74", "76->99"]

|--------------------------------------------------
*/
const findMissingRanges = (nums, lower, upper) => {
  //设置初始指针
  let start = lower;
  let end = upper;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    //如果相等指针++继续向前判断
    if (start === nums[i]) {
      start++;
    } else if (start < nums[i]) {
      //判断缺的值 是否比 当前值小
      //  那么我们试试start+1 看看是不是等于nums【i]
      if (start + 1 == nums[i]) {
        res.push(start + '');
      } else {
        res.push(start + '->' + (nums[i] - 1));
      }
      //🔥把start继续向前
      start = nums[i] + 1;
    }
  }
  //比如 76 还没到99呢 要比较
  if (start === end) {
    res.push(start + '');
  } else {
    res.push(start + '->' + end);
  }
  return res;
};

console.log('findMissingRanges', findMissingRanges([0, 1, 3, 50, 75], 0, 99));
