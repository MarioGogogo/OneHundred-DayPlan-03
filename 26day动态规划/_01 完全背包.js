/**
|--------------------------------------------------
| 完全背包  区别： 物品可以拿无限个
|--------------------------------------------------
*/
//一维数组
function allBackPack(weight, value, size) {
  // 定义 dp 数组
  const len = weight.length,
    dp = Array(size + 1).fill(0)

  //🔥🔥🔥    初始化
  for (let j = weight[0]; j <= size; j++) {
    dp[j] = value[0]
  }

  // weight 数组的长度len 就是物品个数
  for (let i = 1; i <= len; i++) {
    // 遍历物品 顺向
    for (let j = 0; j <= size; j++) {
      // 遍历背包容量
      if (j >= weight[i]) {
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
      }
    }
    console.table(dp)
  }

  return dp[size]
}

console.log(allBackPack([1, 3, 4, 5], [15, 20, 30, 55], 6))
