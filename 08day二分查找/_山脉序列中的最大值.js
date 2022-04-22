/**
|--------------------------------------------------
|  给n个数组 先增后减的序列 没有相等 找到山顶
   🆙
   /\
  /  \
 /    \
 [1,2,4,8,6,3]  返回 8
|--------------------------------------------------
*/
const mountainSequence = (nums) => {
  //边界判断
  if (nums == null || nums.lenth == 0) return -1;

  //找到一个 nums[i] > nums[i+1] 的i
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    const mid = Math.floor(start + (end - start) / 2);
    console.log('%c 🍫 mid: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', mid);
    // mid+1 不一定会越界 比如2个数【1，2】
    // 退出条件 start+1 《 end 一定会满足
    // mid点右下越来越小了 说明山峰一定再左边 丢掉右边
    if (nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      //mid向上爬坡 说明山峰一定再右边
      start = mid;
    }
  }
  //最后取最大值
  return Math.max(nums[start], nums[end]);
};

console.log('mountainSequence', mountainSequence([1, 2, 4, 8, 6, 3]));
