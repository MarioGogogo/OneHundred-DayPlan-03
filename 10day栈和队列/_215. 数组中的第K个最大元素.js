/**
|--------------------------------------------------
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

| 输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
|--------------------------------------------------
*/
class MinHeap {
  constructor() {
    this.heap = []
  }
  swap(x, y) {
    ;[this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]]
  }
  getParentIndex(i) {
    return (i - 1) >> 1
  }
  getLeftIndex(i) {
    return i * 2 + 1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  // 上移操作  跟父节点比较  如果 比父节点下 继续下移   [3,4,1]
  shiftUp(index) {
    //上移堆顶 就结束
    if (index === 0) return
    //获取父节点下标
    const parentIndex = this.getParentIndex(index)
    //父节点 大于 当前节点 必须交换    保证父节点 最小
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  //下移操作
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  pop() {
    //保证中间节点 都正确
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}

//主函数
var findKthLargest = function (nums, k) {
  // 初始化一个最小堆
  const h = new MinHeap()

  nums.forEach((n) => {
    h.insert(n)
    //当堆数量大于k 则进行裁员
    if (h.size() > k) {
      h.pop()
    }
  })
  return h.peek() //堆顶就是要求的  第k个元素
}

console.log('findKthLargest', findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log('findKthLargest', findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
