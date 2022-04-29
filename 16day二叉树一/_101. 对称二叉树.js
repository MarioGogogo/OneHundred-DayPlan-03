/**
|--------------------------------------------------
| 给你一个二叉树的根节点 root ， 检查它是否轴对称。
输入：root = [1,2,2,3,4,4,3]
输出：true
输入：root = [1,2,2,null,3,null,3]
输出：false
|--------------------------------------------------
*/
/**分治法
 *  1.用递归 去判断左子树 右子树是否相等
 *  2.先必须采用3个判断 顺序不能换
 */
var isSymmetric = function (root) {
  if (!root) return;
  return isChildSymmetric(root.left, root.right);
};

const isChildSymmetric = (leftRoot, rightRoot) => {
  if (leftRoot == null && rightRoot == null) return true;
  if (leftRoot == null || rightRoot == null) return false;
  if (leftRoot.val != rightRoot.val) return false;

  const left = isChildSymmetric(leftRoot.left, rightRoot.right);
  const right = isChildSymmetric(leftRoot.right, rightRoot.left);

  return left && right;
};

// 时间复杂度 o（n） 参数的组合可能性 * 每次处理时间
