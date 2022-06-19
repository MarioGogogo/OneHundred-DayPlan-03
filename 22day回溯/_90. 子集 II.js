/**
|--------------------------------------------------
| 给你一个整数数组 nums ，其中可能包含重复元素，
请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
输入：nums = [0]
输出：[[],[0]]
|--------------------------------------------------
*/
// 重点这题在如何去重?
var subsetsWithDup = function (nums) {
  //+ 去重要先排序
  nums.sort((a, b) => a - b)
  let used = new Array(nums.length).fill(false)
  let result = []
  const backtrack = (start, cur, used) => {
    result.push([...cur])
    for (let i = start; i < nums.length; i++) {
      //+ 判断是否前后有重复数字 要跳过同一层
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] == false) {
        continue
      }
      cur.push(nums[i])
      //+ 如果验证过就 给true 同一树枝使用过
      used[i] = true
      backtrack(i + 1, cur, used)
      // + 说明 同一层使用过
      used[i] = false
      cur.pop()
    }
  }

  backtrack(0, [], used)
  return result
}
console.log('subsetsWithDup', subsetsWithDup([1, 2, 2]))
