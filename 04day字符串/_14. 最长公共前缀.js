/**
|--------------------------------------------------
| 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。
输入：strs = ["flower","flow","flight"]
输出："fl"
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
提示：

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] 仅由小写英文字母组成

|--------------------------------------------------
*/
var longestCommonPrefix = function (strs) {
  //边界条件
  if (strs == null || strs.length === 0) return 0;
  let ans = strs[0];
  //从第二个数开始遍历
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    // 满足条件
    while (
      j < ans.length && //不能大于第一个字符串长度
      j < strs[i].length && //根据长度
      ans[j] === strs[i][j] //从第0个下标开始比较
    ) {
      j++;
    }

    ans = ans.substr(0, j);
  }
  return ans;
};
console.log('longestCommonPrefix', longestCommonPrefix(['flight', 'flower', 'flow']));
console.log('longestCommonPrefix', longestCommonPrefix(['dog', 'racecar', 'car']));
