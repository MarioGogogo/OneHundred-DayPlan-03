/**
|--------------------------------------------------
| 给定两个数组 nums1 和 nums2 ，
  返回 它们的交集 。
  输出结果中的每个元素一定是 唯一 的。
  我们可以 不考虑输出结果的顺序 。
  输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
|--------------------------------------------------
*/
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let res = new Set([...set1].filter((item) => set2.has(item)))
  return [...res]
}

console.log('intersection', intersection([1, 2, 2, 1], [2, 2]))
console.log('intersection', intersection([4, 9, 5], [9, 4, 9, 8, 4]))
