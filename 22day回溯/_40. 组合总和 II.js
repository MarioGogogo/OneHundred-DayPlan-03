/**
|--------------------------------------------------
| 给定一个候选人编号的集合 candidates 和一个目标数 target ，
找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
|--------------------------------------------------
*/

var combinationSum2 = (candidates, target) => {
  const result = [];
  let path = [];
  candidates.sort();
  const backtracking = (candidates, target, sum, startIndex) => {
    //2. 终止条件
    if (sum > target) return;
    if (sum === target) {
      result.push([...path]);
      return;
    }
    let f = -1;
    //3.循环遍历
    for (let i = startIndex; i < candidates.length; i++) {
      //去重
      if (candidates[i] + sum > target || candidates[i] === f) continue;
      path.push(candidates[i]);
      sum += candidates[i];
      f = candidates[i]; //前一个下标元素
      backtracking(candidates, target, sum, i + 1);
      path.pop(); //回溯
      sum -= candidates[i]; //回溯
    }
  };
  //1.递归函数 参数
  backtracking(candidates, target, 0, 0);
  return result;
};

console.log('combinationSum2', combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log('combinationSum2', combinationSum2([2, 5, 2, 1, 2], 5));
