const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname, './')
let ret = fs.readdirSync(dir)
let total = 0
ret.filter((v) => {
  if (v.indexOf('day') > -1) {
    const dir = path.resolve(__dirname, './' + v)
    let ret = fs.readdirSync(dir)
    total += ret.length
  }
})
console.log(`截止:${new Date()},你刷了${total}个题,加油`)
// console.log(len)
// const md = fs.readFileSync(path.resolve(__dirname, './README.md'), 'utf8')
// arr
//   .sort((a, b) => {
//     return Date(fs.statSync(a).ctime) - Date(fs.statSync(b).ctime)
//   })
//   .forEach((file) => {
//     let str = '* ' + file.split('.')[0] + '.'
//     if (md.indexOf(str) == -1) {
//       console.log('    * ' + file + ' 不存在')
//     }
//   })
