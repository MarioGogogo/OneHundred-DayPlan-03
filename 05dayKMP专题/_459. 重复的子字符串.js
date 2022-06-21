/**
|--------------------------------------------------
| 给定一个非空的字符串 s ，
  检查是否可以通过由它的一个子串重复多次构成。
  输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
输入: s = "aba"
输出: false
输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
|--------------------------------------------------
*/
//获取最长前后缀长度
function getNext(s) {
  let next = [0] //初始化一个0
  let prefix = 0 //当前共同前后缀长度
  i = 1
  while (i < s.length) {
    //前后是否相同  构成更长的前后缀
    if (s[prefix] === s[i]) {
      prefix += 1 //指针+1
      next.push(prefix)
      i += 1 //指针+1
    } else {
      //前后不相同  看前一个值是否为0
      if (prefix === 0) {
        //数组 插入0  并且i继续递增
        next.push(0)
        i += 1
      } else {
        // 否则说明有值
        prefix = next[prefix - 1]
      }
    }
  }
  return next
}
// kmp版本
var repeatedSubstringPattern = function (s) {
  let n = s.length
  if (n === 0) return false

  const next = getNext(s)
  console.log('next', next)
  let maxLen = next[next.length - 1]
  console.log('maxLen', maxLen)

  return n % (n - maxLen) == 0
}
console.log('repeatedSubstringPattern', repeatedSubstringPattern('asdfasdf'))
console.log(
  'repeatedSubstringPattern',
  repeatedSubstringPattern('abcabcabcabc')
)
