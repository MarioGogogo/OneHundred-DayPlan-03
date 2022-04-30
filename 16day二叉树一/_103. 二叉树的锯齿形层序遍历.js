/**
|--------------------------------------------------
| 你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。
（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[20,9],[15,7]]
输入：root = [1]
输出：[[1]]
输入：root = []
输出：[]

|--------------------------------------------------
*/
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const q = [root];
  const res = [];
  let isOrder = true; //奇偶
  //层序遍历
  while (q.length) {
    let len = q.length;
    res.push([]);
    while (len--) {
      const n = q.shift();
      // 判断奇偶
      if (isOrder) {
        res[res.length - 1].push(n.val);
      } else {
        res[res.length - 1].unshift(n.val);
      }
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    //每一层遍历完结束后 更新 插入的顺序
    isOrder = !isOrder;
  }
  return res;
};
