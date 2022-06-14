/**
|--------------------------------------------------
| 给你一个链表的头节点 head 和一个整数 val ，
  请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
  输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
输入：head = [], val = 1
输出：[]
输入：head = [7,7,7,7], val = 7
输出：[]
|--------------------------------------------------
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 设置一个虚拟头节点
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = dummyHead
  while (cur.next != null) {
    //找到对应节点 删除操作
    if (cur.next.val === val) {
      let tmp = cur.next
      cur.next = cur.next.next
      delete tmp //删除 自动清理内存
    } else {
      cur = cur.next //继续往下遍历
    }
  }
  head = dummyHead.next
  delete dummyHead
  return head
}
