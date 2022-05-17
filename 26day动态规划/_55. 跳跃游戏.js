// 之前有贪心算法

//动态规划思想
var canJump = function (nums) {
  let n = nums.length;
  let f = new Array(n);

  f[0] = true; //初始化

  for (let i = 1; i < n; i++) {
    f[i] = false; //初始化没有
    //枚举最后一块石头
    for (let j = 0; j < i; j++) {
      //状态方程
      if (f[j] && j + nums[j] >= i) {
        f[i] = true;
        break;
      }
    }
  }
  return f[n - 1]; //输出最后一步
};
