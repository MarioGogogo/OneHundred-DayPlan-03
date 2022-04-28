/**
|--------------------------------------------------
| 给定两个字符串 s 和 t ，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。

输入：s = "", t = "y"
输出："y"


|--------------------------------------------------
*/

/**234234
 * 1.t的长度比s长
 * 2.hashmap t中的字符
 */
var findTheDifference = function (s, t) {
  const cnt = new Array(26).fill(0);
  // [1,1,1,1,1，0，0，0，0，0，]
  for (const ch of s) {
    cnt[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }

  for (const ch of t) {
    cnt[ch.charCodeAt() - 'a'.charCodeAt()]--;
    // [0,0,0,0,0，0，-1，0，0，0，]
    if (cnt[ch.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return ch;
    }
  }

  return '';
};

console.log('findTheDifference', findTheDifference('abcdz', 'zabcde'));
