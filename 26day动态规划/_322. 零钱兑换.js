/**
|--------------------------------------------------
| 给你一个整数数组 coins ，表示不同面额的硬币；
以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。
如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
输入：coins = [2], amount = 3
输出：-1
输入：coins = [1], amount = 0
输出：0
|--------------------------------------------------
*/
let coinChange = function (coins, amount) {
  //开数组
  let f = new Array(amount + 1).fill(Infinity);
  let n = f.length;
  //初始数组
  f[0] = 0;

  // 遍历计算顺序 每一个f[]的钱
  // f[1] f[2] f[3] 。。。。 f[11]
  for (let i = 1; i <= amount; i++) {
    // 枚举最后一枚硬币
    for (let j = 0; j < n; j++) {
      //排除正无穷 保证不是负数 i - coins[j] 不能  <0
      if (i >= coins[j] && f[i - coins[j]] !== Infinity) {
        //更新f[i]
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);
      }
    }
  }

  return f[amount] === Infinity ? -1 : f[amount];
};

//优化
const coinChange2 = (coins, amount) => {
  if (!amount) return 0;

  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    // 保证不是负数 i - coins[j] 不能  <0 j从coins[i]开始
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};


