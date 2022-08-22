/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const stack1 = [],
          stack2 = [];
    while (l1 || l2) {
        if (l1) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
    }
    let carry = 0;
    let ansList = null;
    while (stack1.length || stack2.length || carry !== 0) {
        const s1 = stack1.length ? stack1.pop() : 0;
        const s2 = stack2.length ? stack2.pop() : 0;
        let val = s1 + s2 +carry;
        carry = parseInt(val / 10);
        val = val % 10;
        const curNode = new ListNode(val);
        curNode.next = ansList;
        ansList = curNode;
    }
    return ansList;
};