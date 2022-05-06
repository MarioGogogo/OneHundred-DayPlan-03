/**
|--------------------------------------------------
|  给你一颗二叉树 找到和为最小的子树 返回其根节点
 
保证只有一颗 和最小的子树
并且给出的二叉树不是一棵空树

例如 {1，-5，2，1，2，-4，-5}
返回1
{1}
返回1
|--------------------------------------------------
*/

const findSubTree = (root) => {
  let minSum = Infinity;
  let minRoot = null;
  const getTreeSum = (n) => {
    //递归限制条件
    if (!n) return 0;
    // 左子树和
    let leftSum = getTreeSum(n.left);
    // 右子树和
    let rightSum = getTreeSum(n.right);

    let rootSum = leftSum + n.val + rightSum;

    //如果当前树之和更小，更新最小和，更新最小节点
    if (rootSum < minRoot) {
      minSum = rootSum;
      minRoot = n;
    }

    return rootSum; //返回当前和
  };
  getTreeSum(root);
  return minRoot;
};
