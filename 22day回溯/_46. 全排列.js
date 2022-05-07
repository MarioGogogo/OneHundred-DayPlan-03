/**
|--------------------------------------------------
| 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 
。你可以 按任意顺序 返回答案。
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
输入：nums = [0,1]
输出：[[0,1],[1,0]]
输入：nums = [1]
输出：[[1]]
|--------------------------------------------------
*/
var permute = function (nums) {
  const res = [];
  //递归
  const backtrack = (path) => {
    //满足长度相等就不用递归下去了
    if (path.length === nums.length) {
      return res.push(path);
    }
    nums.forEach((num) => {
      //边界条件
      if (path.includes(num)) return;
      backtrack(path.concat(num));
    });
  };
  backtrack([]);
  return res;
};

console.log('permute', permute([1, 2, 3]));
/**
 *
 * @param {总量} A
 * @param {第i个人} i
 * @param {箱子} s
 * @param {存放的答案} ans
 */
// 循环 递归  归类  pop函数   回溯模板
// 什么样的状态是我们想要的
// 后面的人还有选项了？没有就需要返回
// 第i个人的宝石选项是什么样的
const backtrace = (A, i, s, ans) => {
  let N = A == null ? 0 : A.length;
  if (状态满足) {
    ans.push(s);
  }
  //后面的人都没有任何选项了
  if ([i, ...后面]) {
    return;
  }
  for (let 宝石 = 0; i < 第i个人当前的宝石选项; i++) {
    s.push(宝石);
    //递归
    backtrace(A, i + 1, ans);
    //回退
    s.pop();
  }
};
