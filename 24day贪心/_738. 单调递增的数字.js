/**
|--------------------------------------------------
| 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。

给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。

输入: n = 10
输出: 9
输入: n = 1234
输出: 1234
输入: n = 332
输出: 299
|--------------------------------------------------
*/

var monotoneIncreasingDigits = function (n) {
  let strNum = n
    .toString()
    .split('')
    .map((v) => +v); //字符串转数组
  let flag = strNum.length; //标识 表示后面的值需要 用 '9'替换

  // 后往前遍历
  for (let i = strNum.length - 1; i > 0; i--) {
    if (strNum[i - 1] > strNum[i]) {
      flag = i;
      strNum[i - 1]--;
    }
  }

  for (let i = flag; i < strNum.length; i++) {
    strNum[i] = '9';
  }
  return parseInt(strNum.join(''));
};

console.log('monotoneIncreasingDigits', monotoneIncreasingDigits(332));
