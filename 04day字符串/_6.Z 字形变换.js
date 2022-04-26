/**
|--------------------------------------------------
| 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
P   A   H   N
A P L S I I G
Y   I   R

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"

输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I

|--------------------------------------------------
*/
/**
整体的思路是遍历字符串，遍历过程中将每行都看成新的字符串构成字符串数组，最后再将该数组拼接起来即可
如果 numRows=1 则说明当前字符串即为结果，直接返回
否则整个字符串需要经历，向下向右，向下向右，这样的反复循环过程，设定 down 变量表示是否向下，loc 变量表示当前字符串数组的下标
如果 down 为 true，则 loc+=1，字符串数组下标向后移动，将当前字符加入当前字符串中
如果 down为 false，则表示向右，则 loc−=1，字符串数组下标向前移动，将当前字符加入当前字符串中
 */
var convert = (s, numRows) => {
  if (numRows === 1) return s;

  const len = Math.min(s.length, numRows);
  const rows = []; //二维数组
  //根据numRows 行数初始化几行
  for (let i = 0; i < len; i++) {
    rows[i] = '';
  }
  let loc = 0;
  let down = false;

  for (const c of s) {
    rows[loc] += c;
    if ((loc = 0 || loc == numRows - 1)) {
      down = !down; //第一列已经遍历完成
      loc += down ? 1 : -1; //是否要开始第二列
    }
  }
  let ans = '';
  for (const row of rows) {
    ans += row;
  }
  return ans;
};

const convert2 = (s, numRows) => {
  const len = s.length;
  const sb = new Array(numRows).fill([]);
  console.log('sb', sb);
  let idx = 0;

  while (idx < len) {
    // 不可以超过行数 且 idx不可能超过len长度
    for (let i = 0; i < numRows && idx < len; i++) {
      //这里表示每一列列数字
      sb[i].push(s[idx++]);
    }
    for (let i = numRows - 2; i >= 1 && idx < len; i--) {
      // 这里表示计算 Z字形 斜线边的字符串数组
      sb[i].push(s[idx++]);
      /*
        |   / |
        |  /  |
        | /
      */
    }
    console.log('sb[0]', sb[0]);
  }

  for (let i = 1; i < sb.length; i++) {
    sb[0].push(sb[i]);
  }
  return sb[0].toString();
};
console.log('convert2', convert2('PAYPALISHIRING', 4));
