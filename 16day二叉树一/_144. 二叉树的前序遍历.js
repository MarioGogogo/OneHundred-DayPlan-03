/**
|--------------------------------------------------
| 144. 二叉树的前序遍历
输入：root = [1,null,2,3]
输出：[1,2,3]
输入：root = [1,2]
输出：[1,2]
输入：root = [1,null,2]
输出：[1,2]
进阶：递归算法很简单，你可以通过迭代算法完成吗？
|--------------------------------------------------
*/
//迭代版本
var preorderTraversal = function (root) {
  if (!root) return [];
  //中 左 右
  let stack = []; //模拟一个栈
  let res = []; //结果
  stack.push(root);
  while (stack.length) {
    const n = stack.pop();
    res.push(n.val);
    if (n.right) stack.push(n.right); //先右节点 入栈
    if (n.left) stack.push(n.left); //在左节点入栈
  }

  return res;
};
