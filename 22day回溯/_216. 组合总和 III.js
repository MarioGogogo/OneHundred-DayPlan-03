/**
|--------------------------------------------------
| 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

    只使用数字1到9
    每个数字 最多使用一次 
输入: k = 3, n = 7
输出: [[1,2,4]]
解释:
1 + 2 + 4 = 7
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
解释:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
输入: k = 4, n = 1
输出: []
|--------------------------------------------------
*/
let result = [];
let path = [];
var combinationSum3 = function (k, n) {
  // 1.确定递归返回值和参数
  backtracking(n, k, 0, 1);
  return result;
};

const backtracking = (targetSum, k, sum, startIndex) => {
  //剪枝优化1
  if (sum > targetSum) return;
  //终止条件
  if (path.length === k) {
    //满足求和相等 就添加进结果
    if (targetSum === sum) {
      result.push([...path]);
    }
    return;
  }

  //遍历 每层
  //剪枝优化2
  for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
    sum += i;
    path.push(i); //加入路径值
    backtracking(targetSum, k, sum, i + 1);
    sum -= i; //回溯
    path.pop(); //回溯
  }
};

console.log('combinationSum3', combinationSum3(3, 9));
