/**
|--------------------------------------------------
| 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。
  找到并返回可以用这种方式转换的最短回文串。
  输入：s = "aacecaaa"
输出："aaacecaaa"
输入：s = "abcd"
输出："dcbabcd"
|--------------------------------------------------
*/
const getNext = (s) => {
  let next = [0]
  let prefix = 0
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
        //最长前后缀 重新归零 计算
        prefix = next[prefix - 1]
      }
    }
  }
  return next
}
var shortestPalindrome = function (s) {
  const rev_s = s.split('').reverse().join('')
  const str = s + '#' + rev_s
  // 为什么要加#
  // 如果不加 #，'aaa'+'aaa'得到'aaaaaa'，求出的最长公共前后缀是 6，但其实想要的是 3。
  console.log('str', str)
  const next = getNext(str)
  console.log('next', next)
  const maxLen = next[next.length - 1]
  //需要新增的字符
  console.log('s.substring(maxLen)', s.substring(maxLen))
  const add = s.substring(maxLen).split('').reverse().join('')
  return add + s
}
// 时间复杂度On
console.log('shortestPalindrome', shortestPalindrome('abcd'))
console.log('shortestPalindrome', shortestPalindrome('aacecaaa'))
