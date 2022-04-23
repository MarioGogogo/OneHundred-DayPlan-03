/**
|--------------------------------------------------
| 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

    每行的元素从左到右升序排列。
    每列的元素从上到下升序排列。

输入：matrix = [
[1,4,7,11,15],
[2,5,8,12,19],
[3,6,9,16,22],
[10,13,14,17,24],
[18,21,23,26,30]
],
 target = 5
输出：true
|--------------------------------------------------
*/
var searchMatrix = function (matrix, target) {
  //初始行
  let row = 0;
  //初始列下标 第一行最后一个
  let col = matrix[0].length - 1;
  //满足 行 和列都存在
  while (col >= 0 && row < matrix.length) {
    const num = matrix[row][col];
    //如果每一行最后一个数 比目标值大 说明 改列上肯定不会存在
    //比如 [1, 4, 7, 11, 15] 跟 14比较
    if (num > target) {
      col--;
    } else if (num < target) {
      //比如 [1, 4, 7, 11, 15] 跟 20比较
      //相反 则 这一行上肯定不会存在
      row++;
    } else {
      return true;
    }
  }
  return false;
};

console.log(
  'searchMatrix',
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
