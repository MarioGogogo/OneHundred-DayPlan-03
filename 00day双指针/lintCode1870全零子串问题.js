/**
|--------------------------------------------------
| LintCode 1870
比如这个字符串 "001000"
5个0
3个00
1个000
总共9个
Example 2:
再比如:"010010"
4个0
1个00
总共5个
给定一个 0 − 1字符串 s，求其只含 0的子串个数。
考虑一个长度为 l 的只含 0的字符串，则其所有子串都满足条件。
考虑其有多少个子串。
首先，其长度为 1 1 1的子串有 l 个，其长度大于 1 的子串的个数，
等价于在 1 , . . . , l 中选取两个数的方式数，
所以是 ( l 2 ) = l ( l − 1 ) 2 \tbinom{l}{2}=\frac{l(l-1)}{2} (2l​)=2l(l−1)​；所以总共有 l + l ( l − 1 ) 2 = l ( l + 1 ) 2 l+\frac{l(l-1)}{2}=\frac{l(l+1)}{2} l+2l(l−1)​=2l(l+1)​个子串。
接着只需要将 s s s中的最长 0 0 0子串都截出来累加起来即可
|--------------------------------------------------
*/
// 把每段的0...0都找出来，得到range_len。
// 记得每个range的substrings的个数是range_len * (range_len + 1) / 2。
//同向双指针
const stringCount = (str) => {
  if (str == null) return 0;
  let j = 1,
    aswer = 0;
  for (let i = 0; i < str.length; i++) {
    //当i不等于0的时候 跳过
    if (str[i] !== '0') continue;
    // 防止i超过j
    j = Math.max(j, i + 1);
    // j没有越界并且 下标等于0
    while (j < str.length && str[j] === '0') {
      j++;
    }
    //每次把相同0的长度累加
    aswer += j - i;
  }
  return aswer;
};

console.log('object', stringCount('010010'));
console.log('object', stringCount('001000'));
// 时间复杂度 O ( n ) ，空间 O ( 1 ) 。
