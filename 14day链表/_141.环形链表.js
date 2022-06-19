/**
|--------------------------------------------------
| 判断链表是一个环
|--------------------------------------------------
*/
var hasCycle = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }
  return false
}
