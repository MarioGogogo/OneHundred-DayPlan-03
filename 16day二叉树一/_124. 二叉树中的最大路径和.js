/**
|--------------------------------------------------
| 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，
达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。

输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42

|--------------------------------------------------
*/
/*
 ! 二刷我懂了... innerMax 是当前node作为root的时候的最大值，
 ? 也就是说只有在当前节点是root的时候才能够同时选左边和右边；不然的话，作为路径上的一份子，
 * 只能选择左边或者右边。因为dfs的最顶层是二叉树的root，
 * 所以其实我们每个节点当root的可能性都考虑到了，所以选择在innermax那边更新。妙妙
 */

var maxPathSum = (root) => {
  let maxSum = -Infinity; // 最大路径和
  const dfs = (node) => {
    if (!node) return 0;
    const left = dfs(node.left); // 左子树提供的最大路径和
    const right = dfs(node.right); // 右子树提供的最大路径和

    const innerMaxSum = left + node.val + right; // 当前子树内部的最大路径和
    maxSum = Math.max(maxSum, innerMaxSum); // 挑战最大纪录

    const outputMaxSum = node.val + Math.max(0, left, right); // 当前子树对外提供的最大和

    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  };

  dfs(root); // 递归的入口

  return maxSum;
};
