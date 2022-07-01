/**
|--------------------------------------------------
| 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，
  计算按此排列的柱子，下雨之后能接多少雨水。

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 
表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
输入：height = [4,2,0,3,2,5]
输出：9 

|--------------------------------------------------
*/
// 采用 单调栈
var trap = function (height) {
  if (height.length <= 2) return 0
  let ans = 0
  const stack = [] //存下标
  stack.push(0)
  const n = height.length
  for (let i = 1; i < n; i++) {
    //情况一 当前高度 小于 栈顶高度 就加入 [4 2 0 ]
    if (height[i] < height[stack[stack.length - 1]]) {
      stack.push(i)
    } else if (height[i] === height[stack[stack.length - 1]]) {
      //情况二 当前高度 相等 则要删除 栈顶
      stack.pop()
      stack.push(i)
    } else {
      //情况三 当前高度 > 栈顶高度 那么形成了凹槽 就可以计算雨水某区域量
      while (stack.length && height[i] > height[stack[stack.length - 1]]) {
        const top = stack.pop()
        //递归删除stack中未满足要求元素
        if (!stack.length) {
          break
        }
        const left = stack[stack.length - 1] //下标
        const currWidth = i - left - 1
        // height[i]) - height[top] 相当于 最高点 - 最低点就是容器高度
        const currHeight = Math.min(height[left], height[i]) - height[top]
        ans += currWidth * currHeight
      }
      stack.push(i)
    }
  }
  return ans
}

// console.log('trap', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log('trap', trap([4, 2, 0, 3, 2, 5]))
