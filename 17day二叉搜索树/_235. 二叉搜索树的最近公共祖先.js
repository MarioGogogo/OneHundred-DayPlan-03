/**
|--------------------------------------------------
| 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
满足 x 是 p、q 的祖先且 x 的深度尽可能大
（一个节点也可以是它自己的祖先）。”
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
|--------------------------------------------------
*/

var lowestCommonAncestor = function (root, p, q) {
  const traversal = (cur, p, q) => {
    if (cur == null) return cur;

    if (cur.val > p.val && cur.val > q.val) {
      let left = traversal(cur.left, p, q);
      if (left != null) return left;
    }

    if (cur.val < p.val && cur.val < q.val) {
      let right = traversal(cur.right, p, q);
      if (right != null) return right;
    }
    return cur;
  };

  return traversal(root, p, q);
};
