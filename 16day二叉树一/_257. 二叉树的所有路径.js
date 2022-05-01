/**
|--------------------------------------------------
| 给你一个二叉树的根节点 root ，按 任意顺序 ，
返回所有从根节点到叶子节点的路径。

叶子节点 是指没有子节点的节点。
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]
输入：root = [1]
输出：["1"]
|--------------------------------------------------
*/
// dfs
var binaryTreePaths = function (root) {
  if (!root) return [];
  let depPath = [];
  const dfs = (n, path) => {
    //终止条件 到达叶子节点
    if (!n.left && !n.right) {
      //第三次 1+ '->' + 2 + "->" +"5"
      depPath.push(path + n.val); // 1+'->' 加上 n.val
    }
    //第一次进入 '' + 1 + "->"
    //第二次 1+ '->' + 2 + "->"
    path = path + n.val + '->';
    if (n.left) dfs(n.left, path);
    if (n.right) dfs(n.right, path);
  };

  dfs(root, '');
  return depPath;
};
