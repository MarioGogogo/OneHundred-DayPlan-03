/**
|--------------------------------------------------
| 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 
括号匹配 使用栈解决的经典问题
输入：s = "()"
输出：true
输入：s = "()[]{}"
输出：true
输入：s = "([)]"
输出：false
|--------------------------------------------------
*/
// 思路是先考虑右边入栈 再考虑左边    匹配刀了就删除 最后全部匹配 数组就是空
var isValid = function (s) {
  let st = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st.push(')')
    } else if (s[i] === '{') {
      st.push('}')
    } else if (s[i] === '[') {
      st.push(']')
    } else if (st.length === 0 || st[st.length - 1] !== s[i]) {
      return false
    } else {
      st.pop() //弹出栈
    }
  }
  return st.length === 0
}

console.log('isValid', isValid('()'))
console.log('isValid', isValid('([)]'))
