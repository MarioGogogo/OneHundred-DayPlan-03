/**
|--------------------------------------------------
| 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
输入: s = "anagram", t = "nagaram"
输出: true
输入: s = "rat", t = "car"
输出: false

|--------------------------------------------------
*/

var isAnagram = function (s, t) {
  //边界条件
  if (s.length != t.length) return false;
  //模拟hashmap
  let map = [];
  // 先把s字符串中的都存到map中
  for (let a of s) {
    map[a] = (map[a] || 0) + 1;
  }
  //继续遍历t
  for (let a of t) {
    if (map[a]) {
      map[a]--;
      // 在t中存在字符a多于在s中存在的字符a(本质上也是在s中存在而在t中不存在，因为已判定长度相同)
      if (map[a] < 0) {
        return false;
      }
    } else {
      // 在t字符串中存在而在s字符串中不存在
      return false;
    }
  }
  return true;
};

console.log('isAnagram', isAnagram('anagram', 'nagaram'));
console.log('isAnagram', isAnagram('rat', 'car'));
