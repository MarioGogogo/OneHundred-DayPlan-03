/**
|--------------------------------------------------
| 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

输入：root = [3,9,20,null,null,15,7]
输出：2
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
|--------------------------------------------------
*/
//bfs 这样不需要遍历所有
var minDepth = function (root) {
  if (!root) return 0;
  const q = [[root, 1]];
  while (q.length) {
    //提取队头
    const [n, l] = q.shift();
    console.log('n.val', n.val);
    //如果没有孩子节点则直接返回
    if (!n.left && !n.right) return l;
    // 加入叶子节点
    if (n.left) q.push([n.left, l + 1]);
    if (n.right) q.push([n.right, l + 1]);
  }
};

// 时间/空间 o(n)
