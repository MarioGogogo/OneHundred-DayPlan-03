/**
|--------------------------------------------------
| 输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串 (推荐不用数组 用双指针)
|--------------------------------------------------
*/
/**
 * 思路  双指针
 * 时间复杂度 O（n） 每一个指针只访问一次
 * @param {s} s
 * @returns
 */
let isPalindrome = function (s) {
  // 去除异常的字符，先全部转成小写
  let a = s.toLocaleLowerCase().match(/[a-z0-9]+/g); //转成数组
  if (!a) return true;
  let str = a.join(''); //转成字符串
  console.log('%c 🍐 str: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', str);
  let left = 0; //左指针
  let right = str.length - 1; //右指针
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
