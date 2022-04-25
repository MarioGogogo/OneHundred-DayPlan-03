/**
|--------------------------------------------------
| 验证回文字符串 Ⅱ
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。


输入: s = "aba"
输出: true
输入: s = "abc"
输出: false
输入: s = "acbefebcaa"
输出: false
|--------------------------------------------------
*/
// 双指针
let validPalindrome = function (s, r = 0) {
  //边界条件 判断长度2 和 3
  if (s.length == 2 && r == 0) return true;
  if (s.length == 3 && r === 0) return s[0] == s[1] || s[1] == s[2] || s[2] == s[0]; // aba or abc
  let left = 0; //左指针
  let right = s.length - 1; //右指针
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      //这里表示已经删除一个字符之后如果还不想等那就false
      if (r > 0) {
        return false;
      }
      //关键点 当不想等就分割 s1 代表befaebca s2代表cbefaebc
      let s1 = s.slice(left + 1, right + 1);
      let s2 = s.slice(left, right);
      console.log(s1, s2);
      return validPalindrome(s1, r + 1) || validPalindrome(s2, r + 1);
    }
  }

  return true;
};

console.log('validPalindrome', validPalindrome('acbefebcaa'));
