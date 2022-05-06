/**
|--------------------------------------------------
| 给定一棵二叉树的根节点 root，返回给定节点 p 和 q 的最近公共祖先（LCA）节点。
 如果 p 或 q 之一不存在于该二叉树中，返回 null。
 树中的每个节点值都是互不相同的。
 {4,3,7,#,#,5,6} , 3,5 返回 4

 {4，3，7，#，#，5，6，} 5，6 返回7

 输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10
输出： null
解释： 节点 10 不存在于树中，所以返回 null。
 
提示:
树中节点个数的范围是 [1, 104]。
-109 <= Node.val <= 109
所有节点的值 Node.val 是互不相同的。
p != q
|--------------------------------------------------
*/

const lowestCommonAncestor = (root, p, q) => {
  let pfind = false;
  let qfind = false;
  const findLCA = (root, p, q) => {
    if (!root) return root;
    //dfs
    leftnode = findLCA(root.left, p, q);
    rightnode = findLCA(root.right, p, q);
    // 一定要上面的dfs运行完，搜索完整个tree了，才做判断，因为要去在整个tree里面搜p,q
    // 下面的部分不能提前，否则没办法搜整个tree；
    if (root == p) {
      pfind = true;
      return root;
    }
    if (root === q) {
      qfind = true;
      return root;
    }

    if (leftnode == null) {
      return leftnode;
    } else if (rightnode == null) {
      return rightnode;
    } else {
      return root;
    }
  };
  let LCA = findLCA(root, p, q);
  return pfind && qfind ? LCA : null;
};
