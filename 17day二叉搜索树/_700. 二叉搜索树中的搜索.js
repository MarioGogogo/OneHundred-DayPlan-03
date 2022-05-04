/**
|--------------------------------------------------
| 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

你需要在 BST 中找到节点值等于 val 的节点。
 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

 
|--------------------------------------------------
*/

//递归版本
var searchBST = function (root, val) {
  if (root == null || root.val == val) return root;
  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
  return null;
};

//时间 空间 都是 on

//迭代版本
var searchBST = function (root, val) {
  while (root != null) {
    if (root.val > val) {
      root = root.left;
    } else if (root.val < val) {
      root = root.right;
    } else {
      return root;
    }
  }
  return null;
};

//时间 on  空间  o1
