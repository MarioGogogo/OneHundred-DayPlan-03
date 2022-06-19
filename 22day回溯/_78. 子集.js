/**
|--------------------------------------------------
| 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
输入：nums = [0]
输出：[[],[0]]
|--------------------------------------------------
*/
let subsets = function (nums) {
  let result = []
  const backtrack = (start, curr) => {
    //curr添加结果数组
    result.push([...curr])
    for (let i = start; i < nums.length; i++) {
      //插入
      curr.push(nums[i])
      //递归
      backtrack(i + 1, curr)
      //删除尾数
      curr.pop()
    }
  }
  //起始 传 0 空数组
  backtrack(0, [])
  return result
}

console.log('subsets', subsets([1, 2, 3]))
