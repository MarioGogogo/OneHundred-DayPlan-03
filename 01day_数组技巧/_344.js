/**
|--------------------------------------------------
| 你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
编写一个函数，其作用是将输入的字符串反转过来
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
|--------------------------------------------------
*/
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

console.log('reverseString', reverseString(['h', 'e', 'l', 'l', 'o']));
