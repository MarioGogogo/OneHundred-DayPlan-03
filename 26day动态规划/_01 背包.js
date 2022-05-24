/**
|--------------------------------------------------
| 经典背包问题
|--------------------------------------------------
*/
function backPack(wight, value) {
  let m = wight
  let n = value.length
  //初始dp数组
  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false))
  //前0个数的和就是0 为true 其他都是false
  dp[0][0] = true

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (j >= value[i - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - value[i - 1]]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  for (let v = m; v >= 0; v--) {
    if (dp[n][v]) {
      return v
    }
  }

  return -1
}

console.log('backPack', backPack(8, [1, 3, 5]))
