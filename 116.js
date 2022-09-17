/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {return null};
    let queue = [root],
        res = [];
    while (queue.length !== 0) {
        let curSize = queue.length;
        for (let i = 0; i < curSize; i++) {
            let temp = queue.shift();
            if (i < curSize - 1) {temp.next = queue[0]};
            if (temp.left !== null) {
                queue.push(temp.left)}
            if (temp.right !== null) {
                queue.push(temp.right);
            }
        }
    }
    return root;
};