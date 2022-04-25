/**
|--------------------------------------------------
| 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。


|--------------------------------------------------
*/
var merge = function (nums1, m, nums2, n) {
  if (m == 0) return nums2;
  if (n == 0) return nums1;
  let start = 0;
  let end = 0;
  let res = [];
  while (start < nums1.length && end < nums1.length) {
    if (nums[start] >= nums[end]) {
      res.push(nums[start]);
      start++;
    } else {
      res.push(nums[end]);
      end++;
    }
  }
  
  //然后比较可能 2个数组其中一个比完了 另一个数组全部填充过来
  start < nums1.length ? res.push(res.slice())



};

console.log('merge', merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log('merge', merge([1], 1, [], 0));
