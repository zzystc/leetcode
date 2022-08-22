/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) {
        return null;
    }
    const merge = (head1, head2) => {
        let dummy = new ListNode();
        let cur = dummy;
        while (head1 && head2) {
            if (head1.val < head2.val) {
                cur.next = head1;
                head1 = head1.next;
            } else {
                cur.next = head2;
                head2 = head2.next;
            }
            cur = cur.next;
        }
        cur.next = head1 === null ? head2 : head1;
        return dummy.next;
    }
    const mergeLists = (lists, start, end) => {
        if (start + 1 === end) {
            return lists[start];
        }
        let mid = (start + end) >> 1;
        let head1 = mergeLists(lists, start, mid);
        let head2 = mergeLists(lists, mid, end);
        return merge(head1, head2);
    }
    return mergeLists(lists, 0, lists.length);
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if (lists.length <= 1) {
        return lists[0] || null;
    }
    const newLists = [];
    for (let i = 0; i < lists.length; i += 2) {
        newLists.push(merge(lists[i], lists[i + 1] || null));
    }
    return mergeKLists(newLists);
};

const merge = (list1, list2) => {
    const dummy = new ListNode();
    let cur = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    cur.next = list1 === null ? list2 : list1;
    return dummy.next;
}