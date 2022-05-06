/**
|--------------------------------------------------
| 给你两个字符串 haystack 和 needle ，
请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
如果不存在，则返回  -1 。
输入：haystack = "hello", needle = "ll"
输出：2
输入：haystack = "aaaaa", needle = "bba"
输出：-1
输入：haystack = "", needle = ""
输出：0
|--------------------------------------------------
*/
var strStr = function (haystack, needle) {
  //边界条件
  if (haystack == null || haystack.length < needle.length) return -1;
  if (needle == null || needle.length == 0) return 0;
  for (i = 0; i < haystack.length; i++) {
    //needle第一个元素匹配上了 后面needle继续++
    if (haystack[i] === needle[0]) {
      let len = 0;
      while (
        i + len < haystack.length && //小于长度
        len < needle.length && //长度小于needle 从0 开始计数的
        haystack[i + len] === needle[len] //判断i++ 与 needle ++ 后面的值都相等
      ) {
        len++;
      }
      if (len === needle.length) return i;
    }
  }
  return -1;
};
