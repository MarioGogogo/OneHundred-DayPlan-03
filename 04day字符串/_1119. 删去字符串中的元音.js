/**
|--------------------------------------------------
| 给你一个字符串 S，请你删去其中的所有元音字母（ ‘a’，‘e’，‘i’，‘o’，‘u’），
并返回这个新字符串。
示例 1：
输入："leetcodeisacommunityforcoders"
输出："ltcdscmmntyfrcdrs"

示例 2：
输入："aeiou"
输出：""
 
提示：
S 仅由小写英文字母组成。
1 <= S.length <= 1000
|--------------------------------------------------
*/
const removeVowels = (s) => {
  if (s == null || s.length === 0) return '';
  let unordered = ['a', 'e', 'i', 'o', 'u'];
  let res = '';
  for (let i = 0; i < s.length; i++) {
    isHas = unordered.includes(s[i]);
    !isHas && (res += s[i]);
  }
  return res;
};

console.log('removeVowels', removeVowels('leetcodeisacommunityforcoders'));
