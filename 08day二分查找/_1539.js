/**
|--------------------------------------------------
| 给你一个 严格升序排列 的正整数数组 arr 和一个整数 k 。
请你找到这个数组里第 k 个缺失的正整数。
输入：arr = [2,3,4,7,11], k = 5
输出：9
解释：缺失的正整数包括 [1,5,6,8,9,10,12,13,...] 。第 5 个缺失的正整数为 9 。

输入：arr = [1,2,3,4], k = 2
输出：6
解释：缺失的正整数包括 [5,6,7,...] 。第 2 个缺失的正整数为 6 。

注意条件:
1 <= arr.length <= 1000

|--------------------------------------------------
*/
// 二分
var findKthPositive = function (arr, k) {
  //如果arr第一个元素超过了k 说明值很大 第k个元素就是缺失的k
  if (arr[0] > k) return k;
  //经典二分
  let start = 0;
  let end = arr.length - 1;
  while (start + 1 < end) {
    //下标
    const mid = start + ((end - start) >> 1);
    console.log('start,end,mid', start, end, mid);
    if (arr[mid] - mid - 1 < k) {
      start = mid;
    } else {
      end = mid;
    }
  }
  //最后还剩2个数 就要比较 小于k的那个数 比如[5,9] k=5
  //一定是 下标0 + k(5) + 1 第5个数是6
  if (arr[start] - start - 1 < k) {
    return start + k + 1;
  }
};

console.log('findKthPositive', findKthPositive([2, 3, 4, 7, 11], 5));

// 采用
var findKthPositive2 = function (arr, k) {
  for (const x of arr) {
    if (x <= k) k++;
  }
  return k;
};
console.log('findKthPositive2', findKthPositive2([2, 3, 4, 7, 11], 5));
