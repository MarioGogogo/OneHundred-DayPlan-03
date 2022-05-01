/**
|--------------------------------------------------
| 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

输入：root = [3,9,20,null,null,15,7]
输出：true
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
输入：root = []
输出：true
|--------------------------------------------------
*/

var isBalanced = function (root) {
  //定义一个函数
  return getDepth(root) === -1 ? false : true;
};

const getDepth = (node) => {
  if (!node) return 0;
  let leftDepth = getDepth(node.left);
  if (leftDepth === -1) return -1;
  let rightDepth = getDepth(node.right);
  if (rightDepth === -1) return -1;

  return Math.abs(rightDepth - leftDepth) > 1 //比较左右节点
    ? -1
    : 1 + Math.max(rightDepth, leftDepth);
};
