/**
|--------------------------------------------------
| 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 
str 中的每个非空单词之间存在着双向连接的对应规律。
|--------------------------------------------------
*/
// 以pattern = "abba", str = "dog cat cat dog"为例，
// 第1次：map.put('a',0)返回null，map.put("dog",0)返回null，两者相等；
// 第2次：map.put('b',1)返回null，map.put("cat",1)返回null，两者相等；
// 第3次：map.put('b',2)返回1，map.put("cat",2)返回1，两者相等；
// 第4次：map.put('a',3)返回0，map.put("dog",3)返回0，两者相等，
// 结果为 true。

// 以pattern = "abba", str = "dog cat cat fish"为例，
// 第1次：map.put('a',0)返回null，map.put("dog",0)返回null，两者相等；
// 第2次：map.put('b',1)返回null，map.put("cat",1)返回null，两者相等；
// 第3次：map.put('b',2)返回1，map.put("cat",2)返回1，两者相等；
// 第4次：map.put('a',3)返回0，map.put("fish",3)返回null，两者不相等，
// 结果为 false。
/*
 ! 这种映射必须是一对一关系的，不能 'a' 和 'b' 同时对应 'dog'，也不能 'a' 同时对应到 'dog' 和 'cat'
?  所以我们在碰到一个新字符时，首先检查其是否在 HashMap 中出现，若出现，
#  其映射的单词若不是此时对应的单词，则返回 false。如果没有在 HashMap 中出现，
我们还要遍历一遍 HashMap，看新遇到的单词是否已经是其中的映射，若已经有其他映射，直接返回 false，
如果没有，再跟新遇到的字符建立映射。
 */
var wordPattern = function (pattern, s) {
  const word2ch = new Map();
  const ch2word = new Map();
  const words = s.split(' ');
  // 边界条件
  if (pattern.length !== words.length) return false;
  for (const [i, word] of words.entries()) {
    //不满足对应关系条件则退出
    const ch = pattern[i];
    if (
      (word2ch.has(word) && word2ch.get(word) !== ch) || //
      (ch2word.has(ch) && ch2word.get(ch) !== word)
    ) {
      return false;
    }
    word2ch.set(word, ch);
    ch2word.set(ch, word);
  }
  return true;
};
console.log('wordPattern', wordPattern('abba', 'dog cat cat dog'));
console.log('wordPattern', wordPattern('aaaa', 'dog cat cat dog'));

//时间复杂度 o （n+m）
