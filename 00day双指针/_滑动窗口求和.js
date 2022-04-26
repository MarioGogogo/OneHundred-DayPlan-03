/**
|--------------------------------------------------
|  nums= [1,2,7,8,5] k
 = 3
 求数组连续k个数之和
 返回[10,17,20]
|--------------------------------------------------
*/
const winSum = (nums, k) => {
  //边界条件
  if (nums == null || nums.length < k) return [];
  //排除k=0
  if (k == 0) return [];
  //初始化数组保存结果 的结果有几个呢 5(数组长度)- 3(k) + 1 = 3
  let result = [];
  let j = 0, //指针
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // 如果j-i 超过k了表示数量超过3个了
    while (j < nums.length && j - i < k) {
      sum += nums[j];
      j++; //满足条件滑动窗口
    }
    //存一下值
    if (j - i == k) {
      result[i] = sum;
    }
    //滑动窗口 要左边的第一个位置 右移一格
    sum -= nums[i];
  }
  return result;
};

console.log('winSum', winSum([1, 2, 7, 8, 5], 3));
