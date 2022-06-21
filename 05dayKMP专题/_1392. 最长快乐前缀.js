/**
|--------------------------------------------------
| 「快乐前缀」 是在原字符串中既是 非空 前缀也是后缀（不包括原字符串自身）的字符串。

给你一个字符串 s，请你返回它的  最长快乐前缀。
如果不存在满足题意的前缀，则返回一个空字符串 "" 。

 输入：s = "level"
输出："l"
解释：不包括 s 自己，一共有 4 个前缀
（"l", "le", "lev", "leve"）和 4 个后缀（"l", "el", "vel", "evel"）。
最长的既是前缀也是后缀的字符串是 "l" 。
输入：s = "ababab"
输出："abab"
解释："abab" 是最长的既是前缀也是后缀的字符串。题目允许前后缀在原字符串中重叠。

|--------------------------------------------------
*/
// 这里只要求kmp算法中getNext算法
var longestPrefix = function (s) {
  let next = [0]
  let prefix = 0 //前缀长度
  let i = 1
  while (i < s.length) {
    if (s[i] === s[prefix]) {
      prefix += 1
      next.push(prefix)
      i += 1
    } else {
      if (prefix === 0) {
        next.push(0)
        i += 1
      } else {
        prefix = next[prefix - 1]
      }
    }
  }
  console.log('next', next)
  return s.substring(0, next[next.length - 1])
}

console.log('longestPrefix', longestPrefix('level'))
console.log('longestPrefix', longestPrefix('ababab'))
console.log('longestPrefix', longestPrefix('ababba'))
