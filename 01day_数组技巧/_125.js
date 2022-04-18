/*
 * @Author: your name
 * @Date: 2022-04-18 15:13:50
 * @LastEditTime: 2022-04-18 15:26:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /OneHundred-DayPlan-03/_125.js
 */
/**
|--------------------------------------------------
| 输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串 (推荐不用数组 用双指针)
|--------------------------------------------------
*/
let isPalindrome = function (s) {
  // 去除异常的字符，先全部转成小写
  let a = s.toLocaleLowerCase().match(/[a-z0-9]+/g); //转成数组
  if (!a) return true;
  let str = a.join(''); //转成字符串
  console.log('%c 🍐 str: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', str);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

console.log('isPalindrome', isPalindrome('A man, a plan, a canal: Panama'));
