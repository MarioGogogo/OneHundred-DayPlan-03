/**
|--------------------------------------------------
| 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
|--------------------------------------------------
*/

var removeNthFromEnd = function (head, n) {
  // 虚拟头部
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let fast = dummyHead
  let slow = dummyHead

  // 先让fast多走n+1步 再一起走
  while (n-- && fast != null) {
    fast = fast.next
  }
  fast = fast.next //这里再多走一步 这样 slow走到目标的前一个节点方便删除
  while (fast != null) {
    fast = fast.next
    slow = slow.next
  }
  //走到了
  slow.next = slow.next.next
  //返回虚拟节点
  return dummyHead.next
}
