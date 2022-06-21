//计算前缀表
function getNext(s) {
  let next = [0] //初始化一个0
  let prefix = 0 //当前共同前后缀长度
  i = 1
  while (i < s.length) {
    //前后是否相同  构成更长的前后缀
    if (s[prefix] === s[i]) {
      prefix += 1 //指针+1
      next.push(prefix)
      i += 1 //指针+1
    } else {
      //前后不相同  看前一个值是否为0
      if (prefix === 0) {
        //数组 插入0  并且i继续递增
        next.push(0)
        i += 1
      } else {
        // 否则说明有值
        prefix = next[prefix - 1]
      }
    }
  }
  return next
}

console.log('getNext', getNext('aabaaf'))

/**
 * haystack 文本串
 * needle 模板串
 */
const kmp_search = (haystack, needle) => {
  //前缀表
  const next = getNext(needle)
  let i = 0,
    j = 0
  while (i < haystack.length) {
    //字符串匹配相同 指针后移
    if (haystack[i] === needle[j]) {
      i += 1
      j += 1
    } else if (j > 0) {
      //字符串失败 next逃过子串前面的一些字符
      j = next[j - 1]
    } else {
      //子串一个字符就 匹配失败
      i += 1
    }
    //匹配成功
    if (j === needle.length) {
      return i - j
    }
  }
  return -1 //都匹配失败 返回-1
}
//时间复杂度 On

console.log('kmp_search', kmp_search('ABAABABCAA', 'ABABC'))
console.log('kmp_search', kmp_search('aabaabaafa', 'aabaaf'))
console.log('kmp_search', kmp_search('aaaaa', 'bba'))
