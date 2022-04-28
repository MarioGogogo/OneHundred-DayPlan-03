/**
|--------------------------------------------------
| 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
输入：root = [1,null,2,3]
输出：[1,3,2]
输入：root = []
输出：[]
输入：root = [1]
输出：[1]



进阶: 递归算法很简单，你可以通过迭代算法完成吗？
|--------------------------------------------------
*/
//迭代版  模拟栈来实现 递归
var inorderTraversal = function (root) {
  const res = [];
  const stack = []; //初始栈
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left; //压入左子树 栈 [左，左，左]
    }
    const n = stack.pop(); //遍历完 出栈
    res.push(n.val);
    p = n.right; // 右指针 指向p 重新遍历循环一遍
  }
  return res;
};

// 时间复杂度on
// 空间复杂度on

//递归版本
var inorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  const mdfs = (n) => {
    if (!n) return;
    mdfs(n.left);
    res.push(n.val);
    mdfs(n.right);
  };

  mdfs(root);
  return res;
};
