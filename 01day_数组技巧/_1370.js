/**
|--------------------------------------------------
| 输入：s = "aaaabbbbcccc"
输出："abccbaabccba"
解释：第一轮的步骤 1，2，3 后，结果字符串为 result = "abc"
第一轮的步骤 4，5，6 后，结果字符串为 result = "abccba"
第一轮结束，现在 s = "aabbcc" ，我们再次回到步骤 1
第二轮的步骤 1，2，3 后，结果字符串为 result = "abccbaabc"
第二轮的步骤 4，5，6 后，结果字符串为 result = "abccbaabccba"
|--------------------------------------------------
*/

var sortString = function (s) {
  //初始化 26个
  const hash = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - 97]++;
  }
  console.log('%c 🍋 hash: ', 'font-size:20px;background-color: #465975;color:#fff;', hash);
  const res = [];
  let rest = s.length;

  while (rest > 0) {
    //左到右遍历 取最小值
    for (let i = 0; i < 26; i++) {
      if (hash[i] > 0) {
        res.push(String.fromCharCode(i + 97));
        hash[i]--;
        rest--;
      }
    }

    //从右到左 取大值
    for (i = 25; i >= 0; i--) {
      if (hash[i] > 0) {
        res.push(String.fromCharCode(i + 97));
        hash[i]--;
        rest--;
      }
    }
  }
  return res.join('');
};

console.log('sortString', sortString('aaaabbbbcccc'));
