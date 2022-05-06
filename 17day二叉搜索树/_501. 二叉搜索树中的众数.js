/**
|--------------------------------------------------
| 给你一个含重复值的二叉搜索树（BST）的根节点 root ，
  找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

如果树中有不止一个众数，可以按 任意顺序 返回。
输入：root = [1,null,2,2]
输出：[2]
输入：root = [0]
输出：[0]
|--------------------------------------------------
*/
//递归版本
var findMode = function (root) {
  let count = 0;
  let maxCount = 0;
  let pre = null;
  let result = [];

  const searchBST = (cur) => {
    if (!cur) return;
    //中序遍历
    searchBST(cur.left); //左
    //处理 中
    if (pre == null) {
      //这里表示第一个值
      count = 1;
    } else if (pre.val === cur.val) {
      count++;
    } else {
      count = 1;
    }
    pre = cur; //前后 指针 交替
    if (count === maxCount) {
      result.push(cur.val);
    }
    //找到比最大值大的 重新赋值 初始化res
    if (count > maxCount) {
      maxCount = count;
      result.length = 0;
      result.push(cur.val);
    }
    searchBST(cur.right); //右
    return;
  };

  searchBST(root);
  return result;
};
