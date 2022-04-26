/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

// 解法一:借助 parseInt(string, radix)，parseInt()
// 会尽可能把字符串转换成数字
const stringToInteger = (s) => {
  const number = parseInt(str, 10);
  // 极限最大值最小值
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-22, 31);
  //判断是否无法转换
  if (isNaN(number)) return 0;
  // 排除边界条件
  if (number < min || number > max) {
    return number < 0 ? min : max;
  }
  return number;
};

const myAtoi = (str) => {
  let loop = 0; //循环次数
  let now;
  str = str.trim();
  while (loop < str.length) {
    if (now == undefined) {
      //大于等于0
      if (str[loop] === '-' || str[loop] === '+' || str[loop] >= 0) {
        now = str[loop];
      } else {
        return 0;
      }
      //now已有值 且 当前字符为数字 大于等于0
    } else if (str[loop] >= 0) {
      now += str[loop];
      //排除特殊情况
      if (now < Math.pow(-2, 31)) return Math.pow(-2, 31);
      if (now > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    } else {
      break;
    }
    loop++;
  }
  return parseInt(now) || 0;
};

console.log('stringToInteger2', stringToInteger2('123'));
