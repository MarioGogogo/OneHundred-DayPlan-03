/*
|--------------------------------------------------
返回其节点值的 层序遍历 。
! 输入：root = [3,9,20,null,null,15,7]
? 输出：[[3],[9,20],[15,7]]
输入：root = [1]
输出：[[1]]
输入：root = []
输出：[]

|--------------------------------------------------
*/

//bfs2
var levelOrder = function (root) {
  if (!root) return [];
  const q = [root];
  const res = [];
  while (q.length) {
    let len = q.length;
    //每一层先push一个空数组用来存 该层节点
    res.push([]);
    // n代表每一层节点
    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }
  return res;
};

// bfs
var levelOrder = function (root) {
  if (!root) return [];
  let q = [[root, 0]];
  const res = [];
  while (q.length) {
    const [n, level] = q.shift();
    /**重点是这里 第一次res [[]] push的是root节点*/
    if (!res[level]) {
      res.push([n.val]);
    } else {
      res[level].push(n.val);
    }
    /********************/
    console.log('level', level);
    if (n.left) q.push([n.left, level + 1]);
    if (n.right) q.push([n.right, level + 1]);
  }
};
