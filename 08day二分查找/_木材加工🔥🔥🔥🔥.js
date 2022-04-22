/**
|--------------------------------------------------
| 切木头
  不同长度的木头切n端
  但要满足
  交出k段  而且 长度是最长的
  比如
  切长度  1m      6    7 。。。
  4m      4段    0    0
  6m      6段    1    0
  7m      7端    1    1
  8m      8端    1    1
  总共     25    3     2
  满足答案的  是 6
   25 12 7 4 3 3 2 1  
   是否可以转换为 下标tage满足tager= 3 里面 index最大的6

  [1,2,3 ] k = 7  ===> 0
|--------------------------------------------------
*/
/**
 *
 * @param {木头长度数组} nums
 * @param {需要的木头数量} K
 * @returns
 */
const woodCut = (nums, K) => {
  if (nums == null || nums.length === 0) return 0;
  let start = 1;
  //初始end 等于 木头的最大值
  let end = Math.min(Math.max(nums), sum(nums) / k);
  // 如果end小于1 不可能完成任务
  if (end < 1) return 0; //比如【1，2，3] k = 7

  while (start + 1 < end) {
    const mid = Math.floor((start + end) / 2);
    // 长度为mid的木头总数 >= 目标总数 那就说明右边可能还会有值 放弃左边
    if (get_count(nums, mid) >= k) {
      start = mid;
    } else {
      //长度mid的木头总数 < 目标总数 继续搜短木头长度 选左边
      end = mid;
    }
  }

  return get_count(nums, end) >= k ? end : start;
};

//计算某一段木头切了之后的总和
function get_count(nums, mid) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    l = parseInt(nums[i] / mid);
    sum += l;
  }
  return sum;
}

// 总和
function sum(nums) {
  return nums.reduce((t, v) => t + v);
}
