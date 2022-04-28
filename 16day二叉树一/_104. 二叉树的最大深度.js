/**
|--------------------------------------------------
| 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，
    3
   / \
  9  20
    /  \
   15   7
   返回3最大深度

|--------------------------------------------------
*/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
//dfs深度遍历
var maxDepth = function (root) {
  let res = 0;
  const dfs = (n, l) => {
    if (!n) return;
    console.log('n.val', n.val);
    //最大值
    // 到达叶子节点
    if (!n.left && !n.right) {
      res = Math.max(l, res);
    }
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };
  dfs(root, 1);
  return res;
};
