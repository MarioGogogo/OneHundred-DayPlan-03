/**
|--------------------------------------------------
| 以数组 intervals 表示若干个区间的集合，
其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

|--------------------------------------------------
*/

var merge = function (intervals) {
  let res = [];
  if (intervals == null || intervals.length === 0) return res;
  intervals.sort((a, b) => a[0] - b[0]);
  let flag = false;
  let len = intervals.length;

  for (let i = 1; i < len; i++) {
    //初始化
    let start = intervals[i - 1][0];
    let end = intervals[i - 1][1];

    while (i < len && intervals[i][0] <= end) {
      //不断更新右区间
      end = Math.max(end, intervals[i][1]);
      if (i === len - 1) flag = true;
      i++;
    }
    res.push([start, end]);
  }
  if (flag == false) {
    res.push([intervals[len - 1][0], intervals[len - 1][1]]);
  }
  return res;
};
console.log(
  'merge',
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [10, 18],
  ])
);
