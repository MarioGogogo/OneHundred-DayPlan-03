/**
|--------------------------------------------------
| 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
p q 一定存在 树中


输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。

输入：root = [1,2], p = 1, q = 2
输出：1

|--------------------------------------------------
*/

var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (root == p || root == q) return root;

  //dfs递归
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  //左右子树都有值 那么公共祖先就是他们的root
  if (left != null && right != null) {
    return root;
  }
  // 只有左子树有值
  if (left != null) {
    return left;
  }
  if (right != null) {
    return right;
  }
  return null;
};
