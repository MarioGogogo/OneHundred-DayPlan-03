/**
|--------------------------------------------------
| 给定一个二叉树的 根节点 root，
想象自己站在它的右侧，按照从顶部到底部的顺序，
返回从右侧所能看到的节点值。
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
输入: [1,null,3]
输出: [1,3]
输入: []
输出: []
|--------------------------------------------------
*/
//采用迭代版本 stack栈
var rightSideView = function (root) {
  if (!root) return [];
  const p = [root];
  let res = [];
  while (p.length) {
    let len = p.length;
    let now = []; //取第一个
    while (len--) {
      //重新迭代
      const n = p.shift();
      now.push(n.val);
      if (n.left) p.push(n.left);
      if (n.right) p.push(n.right);
    }
    //获取最后一个 [[1],[2,3],[5,4]]
    res.push(now[now.length - 1]);
  }
  console.log('res', res);
  return res;
};
