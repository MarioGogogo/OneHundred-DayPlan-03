/**
|--------------------------------------------------
| 叉树的根节点 root 和一个表示目标和的整数 targetSum 。
判断该树中是否存在 根节点到叶子节点 的路径，
这条路径上所有节点值相加等于目标和 targetSum 。
如果存在，返回 true ；否则，返回 false 。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。
输入：root = [1,2,3], targetSum = 5
输出：false
解释：树中存在两条根节点到叶子节点的路径：
(1 --> 2): 和为 3
(1 --> 3): 和为 4
不存在 sum = 5 的根节点到叶子节点的路径。
输入：root = [], targetSum = 0
输出：false
解释：由于树是空的，所以不存在根节点到叶子节点的路径。
|--------------------------------------------------
*/

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let res = false;
  const dfs = (n, v) => {
    console.log('n.val', n.val);
    // 结束条件 🔥🔥🔥
    if (!n.left && !n.right && v === targetSum) {
      res = true;
    }
    if (n.left) dfs(n.left, v + n.left.val);
    if (n.right) dfs(n.right, v + n.right.val);
  };
  dfs(root, root.val);
  return res;
};
