/**
|--------------------------------------------------
| 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false

|--------------------------------------------------
*/
var MyQueue = function () {
  this.inStack = [] //输入栈
  this.outStack = [] //输出栈
}

MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
  console.log('this.inStack', this.inStack)
}
// 从队列的开头移除并返回元素
MyQueue.prototype.pop = function () {
  if (!this.outStack.length) {
    this.in2Out()
  }
  return this.outStack.pop()
}
MyQueue.prototype.in2Out = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop())
  }
}
// 返回队列开头的元素
MyQueue.prototype.peek = function () {
  if (!this.outStack.length) {
    this.in2Out()
  }
  return this.outStack[this.outStack.length - 1]
}

MyQueue.prototype.empty = function () {
  return this.outStack.length === 0 && this.inStack.length === 0
}
//空间 On  时间 O1
const queue = new MyQueue()
queue.push(1)
queue.push(2)
queue.push(3)
console.log('peek', queue.peek())
// console.log('pop()', queue.pop())
