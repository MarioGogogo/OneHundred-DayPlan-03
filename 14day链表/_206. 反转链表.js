/**
|--------------------------------------------------
| 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let tmp = null //保存 cur的下一个节点
  let cur = head
  let pre = null
  //  cur一直循环刀 cur走刀null
  while (cur) {
    tmp = cur.next
    cur.next = pre
    pre = cur //指针继续向前走
    cur = tmp
  }
  return pre
}
