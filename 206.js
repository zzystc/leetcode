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
var reverseList = function(head) {
    let temp = new ListNode(),
        next = null;
    while (head) {
        next = head.next;
        head.next = temp.next;
        temp.next = head;
        head = next;
    }
    return temp.next;
};