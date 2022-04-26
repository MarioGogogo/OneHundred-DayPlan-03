/**
|--------------------------------------------------
| 给你一个仅由大写英文字母组成的字符串，
你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。
在执行上述操作后，找到包含重复字母的最长子串的长度。

注意：字符串长度 和 k 不会超过 104。
示例 1：
输入：s = “ABAB”, k = 2
输出：4
解释：用两个’A’替换为两个’B’,反之亦然。
示例 2：

输入：s = “AABABBA”, k = 1
输出：4
解释：
将中间的一个’A’替换为’B’,字符串变为 “AABBBBA”。
子串 “BBBB” 有最长重复字母, 答案为 4。
|--------------------------------------------------
*/
const characterReplacement = (s, k) => {
  //边界条件
  if (s == null) return 0;

  let j = 0,
    answer = 0,
    maxFreq = 0,
    count;
  const counter = new Map();
  for (let i = 0; i < s.length; i++) {
    while (j < s.length && j - i - maxFreq <= k) {
      //用hashmap去存值
      count = counter.get(s[j], 0);
      //有值就加
      // 没值就存
      //取最大值
      maxFreq = Math.max(maxFreq, count);
      j++;
    }
    //当超出k范围
    if (j - i - maxFreq > k) {
      answer = Math.max(answer, j - i - 1);
    } else {
      answer = Math.max(answer, j - i);
    }
    count = counter.get(s[i]) - 1;
    counter.set(s[i], count);
    maxFreq = getMaxFreq(counter);
  }
  return answer;
};
