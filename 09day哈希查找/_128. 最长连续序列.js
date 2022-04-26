/**
|--------------------------------------------------
| 给定一个未排序的整数数组 nums 
，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
|--------------------------------------------------
*/
var longestConsecutive = function (nums) {
  //去重
  const set = new Set(nums);
  let max = 0;
  for (let [key, val] of set.entries()) {
    //判断是否是起点
    if (!set.has(val - 1)) {
      let count = 1;
      let cur = val; //当前值
      //找右邻 看连续会有多少
      while (set.has(cur + 1)) {
        count++;
        cur++;
      }
      //全部找完以后比较最大值
      max = Math.max(max, count);
    }
  }

  return max;
};

console.log('longestConsecutive', longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
