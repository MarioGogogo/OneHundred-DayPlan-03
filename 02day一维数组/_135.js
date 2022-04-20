/**
|--------------------------------------------------
| 分糖果
n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
相邻两个孩子评分更高的孩子会获得更多的糖果。
输入：ratings = [1,0,2]
输出：5
解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。

输入：ratings = [1,2,2]
输出：4
解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
     第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
|--------------------------------------------------
*/
// 1 先初始化一个数组
// 2.从左往右遍历 如果发现 右边比左边大就+1
// 3 从右玩左遍历 发现左边比右边大则该轮循环rihgt++ 并且比较该轮循环与 上一轮loops循环所得结果[i]取最大值计算 sum
// 4.继续循环
var candy = function (ratings) {
  //初始化
  const n = ratings.length;
  //先全部填充1个糖果
  const left2right = new Array(n).fill(1);
  // 从左往右遍历
  for (let i = 0; i < n; i++) {
    // [12, 10, 8];如果右边比前面大 就加一颗糖果
    if (i !== 0 && ratings[i] > ratings[i - 1]) {
      left2right[i] = left2right[i - 1] + 1; //
    }
  }
  let sum = (right = 0);
  //从右往左遍历 看看权重
  for (let i = n - 1; i >= 0; i--) {
    if (i != n - 1 && ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }
    //总糖果数取最大值
    sum += Math.max(left2right[i], right);
  }

  return sum;
};

console.log('candy', candy([1, 0, 2]));
