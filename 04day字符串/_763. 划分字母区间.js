/**
|--------------------------------------------------
| 符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，
同一字母最多出现在一个片段中。
返回一个表示每个字符串片段的长度的列表。
输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

|--------------------------------------------------
*/
// 思路;
// 1.第一个循环记录每一个字符最远的距离下标
// 2.遍历最远距离 切割最远距离
// 3.然后切割下一个字符

var partitionLabels = function (s) {
  const maxPos = {};
  // 第一个循环记录每个字符最远距离下标
  for (let i = 0; i < s.length; i++) {
    maxPos[s[i]] = i;
  }
  console.log('%c 🍝 maxPos: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', maxPos);
  // 第二个循环
  const res = [];
  let start = 0;
  let scannedIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const curMaxIndex = maxPos[s[i]];
    scannedIndex = Math.max(scannedIndex, curMaxIndex);
    //切割
    if (i === scannedIndex) {
      res.push(i - start + 1); //记录距离
      start = i + 1; //更新切割点
    }
  }
  return res;
};

console.log('partitionLabels', partitionLabels('ababcbacadefegdehijhklij'));
