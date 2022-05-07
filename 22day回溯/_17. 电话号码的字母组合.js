/**
|--------------------------------------------------
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
| 输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
输入：digits = ""
输出：[]
|--------------------------------------------------
*/
const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
let result = [];
let s = [];
var letterCombinations = function (digits) {
  if (digits.length == 0) return result;
  //递归函数
  backtracking(digits, 0);
  return result;
};

const backtracking = (digits, index) => {
  //终止条件
  if (index === digits.length) {
    // [[a,b],[a,c]] -- ["ab",'ac']
    result.push(s.join(''));
    return;
  }

  let digit = +digits[index]; // 下标
  let letters = letterMap[digit]; //下标对应字符串
  for (let i = 0; i < letters.length; i++) {
    s.push(letters[i]);
    //递归
    backtracking(digits, index + 1);
    s.pop(); //回溯
  }
};

console.log('letterCombinations', letterCombinations('234'));
