/**
|--------------------------------------------------
| 给你一个字符串数组，
 请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
输入: strs = [""]
输出: [[""]]
输入: strs = ["a"]
输出: [["a"]]
|--------------------------------------------------
*/
// 时间复杂度 nklogk n 是strs 中的字符串的数量，k 是strs 中的字符串的的最大长度
var groupAnagrams = function (strs) {
  let result = []
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
    //字符串分割 "eat" == [e a t]
    let strArr = strs[i].split('')
    //转成排好序的字符串  "eat" -> "aet"
    const key = strArr.sort().join('')
    //判断是否存在map中
    if (!map.has(key)) {
      map.set(key, [])
    }
    const res = map.get(key)
    //对应key中 累加
    res.push(strs[i])
    map.set(key, res)
  }

  for (var [key, value] of map.entries()) {
    result.push(value)
  }
  return result
}

console.log(
  'groupAnagrams',
  groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
)
console.log('groupAnagrams', groupAnagrams(['a']))
console.log('groupAnagrams', groupAnagrams(['']))
