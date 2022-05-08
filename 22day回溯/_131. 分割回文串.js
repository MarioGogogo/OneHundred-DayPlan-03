/**
|--------------------------------------------------
| 给你一个字符串 s，请你将 s 分割成一些子串，
使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
输入：s = "a"
输出：[["a"]]
|--------------------------------------------------
*/

var partition = function (s) {
  let result = [];
  let path = [];
  const backtracking = (s, startIndex) => {
    //2.满足条件 存放结果
    if (startIndex >= s.length) {
      result.push([...path]);
    }
    for (let i = startIndex; i < s.length; i++) {
      //判断是否会问子串
      if (isPalindrome(s, startIndex, i)) {
        let str = s.substring(startIndex, i + 1);
        console.log('str', str);
        path.push(str);
      } else {
        continue; //跳过
      }
      backtracking(s, i + 1);
      path.pop(); //回溯
    }
  };
  //1.递归方法
  backtracking(s, 0);
  return result;
};

//回文字串双指针
const isPalindrome = (s, start, end) => {
  for (let i = start, j = end; i < j; i++, j--) {
    if (s[i] != s[j]) {
      return false;
    }
  }
  return true;
};

console.log('partition', partition('ab'));
console.log('partition', partition('aab'));
