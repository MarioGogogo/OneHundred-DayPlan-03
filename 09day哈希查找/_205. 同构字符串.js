/**
|--------------------------------------------------
| 
给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，\
相同字符只能映射到同一个字符上，字符可以映射到自己本身。

输入：s = "egg", t = "add"
输出：true

输入：s = "foo", t = "bar"
输出：false

输入：s = "paper", t = "title"
输出：true

|--------------------------------------------------
*/
var isIsomorphic = function (s, t) {
  let S = new Map();
  let T = new Map();
  let i = -1;
  while (i++ < s.length) {
    //取出每一个字符
    const a = s[i];
    const b = t[i];
    //如果之前已经存过 并且 因为之前存过a的对应关系 比如 a= “b”
    //如果再次出现a a != 'b'了就说明不是同构了
    if (S.get(a) !== T.get(b)) return false;
    S.set(a, i);
    T.set(b, i);
  }
  return true;
};
