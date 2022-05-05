/**
|--------------------------------------------------
| 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

    节点的左子树只包含 小于 当前节点的数。
    节点的右子树只包含 大于 当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。

输入：root = [2,1,3]
输出：true
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
|--------------------------------------------------
*/
//递归
const helper = (root, lower, upper) => {
  //边界条件
  if (root === null) return true;
  //满足 二叉搜索 条件 节点的左子树只包含 小于 当前节点的数。节点的右子树只包含 大于 当前节点的数。
  if (root.val <= lower || root.val >= upper) return false;
  const left = helper(root.left, lower, root.val);
  const right = helper(root.right, root.val, upper);
  return left && right;
};
var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity);
};
