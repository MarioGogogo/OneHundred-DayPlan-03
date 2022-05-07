/**
|--------------------------------------------------
| 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。
输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
输入：n = 1, k = 1
输出：[[1]]

|--------------------------------------------------
*/
//暴力求解
var combine = function (n, k) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      res.push([i, j]);
    }
  }
  return res;
};
// console.log('combine', combine(4, 2));

//回溯
let path = []; //存放单一结果
let result = [];
console.log('path', path);
var combine2 = function (n, k) {
  //  三部曲
  // 1.确定递归返回值和参数
  result = [];
  backtrace(n, k, 1);
  return result;
};
const backtrace = (n, k, startIndex) => {
  //2.确定终止条件
  console.log('object', path, k);
  if (path.length === k) {
    result.push([...path]);
    return;
  }
  //3.确定单层搜索过程
  // for (let i = startIndex; i <= n; i++) {
  //   path.push(i); // [1,2]
  //   backtrace(n, k, i + 1);
  //   console.log('回溯了', i + 1);
  //   path.pop();
  // }
  //剪枝操作
  for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
    path.push(i); // [1,2]
    backtrace(n, k, i + 1);
    console.log('回溯了', i + 1);
    path.pop();
  }
};

console.log('combine2', combine2(4, 2));
