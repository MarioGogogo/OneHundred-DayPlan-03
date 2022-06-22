/**
|--------------------------------------------------
| 请你仅使用两个队列实现一个后入先出（LIFO）的栈，
并支持普通栈的全部四种操作（push、top、pop 和 empty）。

实现 MyStack 类：

void push(int x) 将元素 x 压入栈顶。
int pop() 移除并返回栈顶元素。
int top() 返回栈顶元素。
boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 
|--------------------------------------------------
*/
var MyStack = function () {
  this.que1 = []
  this.que2 = [] //用来备份
}

MyStack.prototype.push = function (x) {
  this.que1.push(x)
  console.log('this.que1', this.que1)
}
// 移除并返回栈顶元素
MyStack.prototype.pop = function () {
  //[1,2,3] ---> [1,2]
  while (this.que1.length > 1) {
    this.que2.push(this.que1.shift())
  }
  let ans = this.que1.shift() //[3]

  //[1,2] --> [1,2]
  while (this.que2.length) {
    console.log('this.que2', this.que2)
    this.que1.push(this.que2.shift())
  }
  return ans
}
MyStack.prototype.top = function () {
  return this.que1[this.que1.length - 1]
}
MyStack.prototype.empty = function () {
  return this.que1.length === 0
}

const stack = new MyStack()

stack.push(1)
stack.push(2)
stack.push(3)
console.log('stack.pop()', stack.pop())
console.log('stack.top()', stack.top())
