/**
|--------------------------------------------------
| 给你一个二叉搜索树的根节点 root ，
返回 树中任意两不同节点值之间的最小差值 。

差值是一个正数，其数值等于两值之差的绝对值。
输入：root = [4,2,6,1,3]
输出：1
输入：root = [1,0,48,null,null,12,49]
输出：1
|--------------------------------------------------
*/
/**
1.我们的做法就是对BST进行中序遍历由于BST的左<根<右的性质，
如果按照中序遍历会得到一个有序数组，那么最小绝对差肯定在相邻的两个节点值之间产生
2.然后当前节点值和之前节点值求绝对差并更新结果res。
3.这里需要注意的就是在处理第一个节点值时，
4.由于其没有前节点，所以不能求绝对差。
这里我们用变量pre来表示前节点值，
这里由于题目中说明了所以节点值不为负数，
5.所以我们给pre初始化-1，
这样我们就知道pre是否存在。
 */

var getMinimumDifference = function (root) {
  let res = [];
  //中序遍历得到有序数组
  traversal(root, res);
  if (res.length < 2) return 0;
  let result = Number.MAX_SAFE_INTEGER;
  //遍历数组 找前后2个值直接的最小差值
  for (let i = 1; i < res.length; i++) {
    result = Math.min(result, res[i] - res[i - 1]);
  }
  return result;
};
// 中序遍历
const traversal = (root, res) => {
  if (!root) return;
  traversal(root.left, res);
  res.push(root.val);
  traversal(root.right, res);
};
