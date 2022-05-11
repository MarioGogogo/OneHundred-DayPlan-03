/**
|--------------------------------------------------
| n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
你需要按照以下要求，给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
相邻两个孩子评分更高的孩子会获得更多的糖果。
请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
输入：ratings = [1,0,2]
输出：5
解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
输入：ratings = [1,2,2]
输出：4
解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
     第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。

|--------------------------------------------------
*/
/**
 * 切记不要同时2边比较 顾此失彼
 * 一次从左 到右遍历 比较右边 比左边大的情况
 * 一次从右 到左  比较 左边比右边大的情况
 *
 * @param {*} ratings
 */
var candy = function (ratings) {
  let candyVic = new Array(ratings.length).fill(1);
  let result = 0;

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyVic[i] = candyVic[i - 1] + 1; //多加一个糖果
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candyVic[i] = Math.max(candyVic[i], candyVic[i + 1] + 1);
    }
  }
  console.log('candyVic', candyVic);
  //总和相加
  for (let i = 0; i < candyVic.length; i++) {
    result += candyVic[i];
  }
  return result;
};

console.log('candy', candy([1, 0, 2]));
