/**
|--------------------------------------------------
| 经典背包问题
|--------------------------------------------------
*/
function testWeightBagProblem(weight, value, size) {
  // 定义 dp 数组
  const len = weight.length,
    dp = Array(len)
      .fill()
      .map(() => Array(size + 1).fill(0))

  // 初始化
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0]
  }

  // weight 数组的长度len 就是物品个数
  for (let i = 1; i < len; i++) {
    // 遍历物品
    for (let j = 0; j <= size; j++) {
      // 遍历背包容量
      if (j < weight[i]) dp[i][j] = dp[i - 1][j]
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
    }
  }

  console.table(dp)

  return dp[len - 1][size]
}

console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6))

//一维数组
function testWeightBagProblem2(weight, value, size) {
  // 定义 dp 数组
  const len = weight.length,
    dp = Array(size + 1).fill(0)

  //🔥🔥🔥    初始化
  for (let j = weight[0]; j <= size; j++) {
    dp[j] = value[0]
  }

  // weight 数组的长度len 就是物品个数
  for (let i = 1; i <= len; i++) {
    // 遍历物品
    for (let j = size; j >= 1; j--) {
      // 遍历背包容量
      if (j >= weight[i]) {
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
      }
    }
    console.table(dp)
  }

  return dp[size]
}

console.log(testWeightBagProblem2([1, 3, 4, 5], [15, 20, 30, 55], 6))
