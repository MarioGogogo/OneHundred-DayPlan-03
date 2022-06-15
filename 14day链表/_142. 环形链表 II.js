/**
|--------------------------------------------------
| 给定一个链表的头节点  head ，
  返回链表开始入环的第一个节点。 
  如果链表无环，则返回 null。
  输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
|--------------------------------------------------
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head
  let slow = head
  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    // 相遇了 2种情况
    if (slow === fast) {
      /**
       * 1.第一圈就相遇了
       * 2.fast走了n-1圈才相遇
       */
      let index1 = fast
      let index2 = head //从head点再来一次就能找到相遇点
      //继续循环
      while (index1 != index2) {
        index1 = index1.next
        index2 = index2.next
      }
      return index2 //入口点
    }
  }
  return null
}
