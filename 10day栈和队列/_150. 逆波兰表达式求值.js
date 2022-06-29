/**
|--------------------------------------------------
| 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

注意 两个整数之间的除法只保留整数部分。

可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
输入：tokens = ["4","13","5","/","+"]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
输出：22
解释：该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
|--------------------------------------------------
*/

var evalRPN = function (tokens) {
  const stack = []
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if ('+' === token || '-' === token || '*' === token || '/' === token) {
      let num2 = stack.pop()
      let num1 = stack.pop()
      console.log('num2,1nums1', num2, num1)
      if ('+' === token) stack.push(num1 + num2)
      if ('-' === token) stack.push(num1 - num2)
      if ('*' === token) stack.push(num1 * num2)
      if ('/' === token)
        stack.push(
          num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2)
        )
    } else {
      stack.push(parseInt(token))
    }
  }
  return stack.pop()
}

console.log(
  'evalRPN',
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
)
console.log('evalRPN', evalRPN(['4', '13', '5', '/', '+']))
console.log('evalRPN', evalRPN(['2', '1', '+', '3', '*']))
