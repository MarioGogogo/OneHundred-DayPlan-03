/**
|--------------------------------------------------
| 给你一个正整数 n ，
  生成一个包含 1 到 n2 所有元素，
  且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
输入：n = 1
输出：[[1]]
|--------------------------------------------------
*/
var generateMatrix = function (n) {
  //初始化填充数组
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  console.log('res', res)
  //定义一些动态数据
  const loop = n >> 1 //循环几圈
  let i = 0, //循环次数
    count = 1,
    startX = (startY = 0) //起始位置
  // 开始遍历每一条边
  while (++i <= loop) {
    let row = startX
    let column = startY
    //!最上面的 y n-i
    while (column < n - i) {
      res[row][column++] = count++
    }
    //!最右边的 竖  row 会自增  colum不变
    while (row < n - i) {
      res[row++][column] = count++
    }
    //!最底下的 横  colum 会自减   <-----  row不变
    while (column > startY) {
      res[row][column--] = count++
    }
    while (row > startX) {
      res[row--][column] = count++
    }
    //走完一圈起始位置必须变成 内圈
    startX++
    startY++
  }
  //判断是否有内圈
  if (n & 1) {
    res[startX][startY] = count
  }
  console.log('res', res)
  return res
}

console.log('generateMatrix', generateMatrix(5))
