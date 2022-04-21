/**
|--------------------------------------------------
| 输入：words = ["bella","label","roller"]
输出：["e","l","l"]
|--------------------------------------------------
*/
let commonChars = function (words) {
  let m = new Array(26).fill(0);

  for (let i = 0; i < words[0].length; i++) {
    m[words[0].charCodeAt(i) - 97]++;
  }
  console.log('%c 🌽 m: ', 'font-size:20px;background-color: #FCA650;color:#fff;', m);
  for (let j = 1; j < words.length; j++) {
    //填充
    let freq = new Array(26).fill(0);
    for (let i = 0; i < words[j].length; i++) {
      freq[words[j].charCodeAt(i) - 97]++;
    }
    console.log('%c 🍱 freq: ', 'font-size:20px;background-color: #B03734;color:#fff;', freq);
    //第i个字符串的情况与charCount对比，取小的即可
    for (let i = 0; i < 26; i++) {
      m[i] = Math.min(m[i], freq[i]); //比较2个数组中较小的那个值 合并进 minFreq
    }
  }

  let res = [];
  // 将字符出现最小次数大于 0 的字符输出到结果中
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < m[i]; j++) {
      res.push(String.fromCharCode(i + 97));
    }
  }

  return res;
};

console.log(commonChars(['bella', 'label', 'roller']));
